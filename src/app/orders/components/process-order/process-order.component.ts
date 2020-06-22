import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models';
import { CartFacade, CartState } from 'src/app/core/@ngrx';
import { CustomValidators } from '../../../shared/validators';
import { debounceTime, take } from 'rxjs/operators';

@Component({
    selector: 'app-process-order',
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.scss'],
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
    cartState$: Observable<CartState>;
    order: Order = {} as Order;
    orderForm: FormGroup;
    placeholder = {
        email: 'Email (required)',
        phone: 'Phone'
    };
    firstNameValidationMessage: string;
    emailValidationMessage: string;
    private ordersService: EntityCollectionService<Order>;
    private sub: Subscription;
    private validationMessagesMap = {
        firstName: {
            required: 'Please enter your first name.',
            firstName: 'The first name must be longer than 3 characters.'
        },
        email: {
            required: 'Please enter your email phone.',
            email: 'Please enter a valid email phone.',
            asyncEmailInvalid:
                'This email already exists. Please enter other email phone.'
        }
    };

    constructor(entityServices: EntityServices,
                private cartFacade: CartFacade,
                private formBuilder: FormBuilder) {
        this.ordersService = entityServices.getEntityCollectionService('Order');
    }

    get phones(): FormArray {
        return this.orderForm.get('phones') as FormArray;
    }

    ngOnInit(): void {
        this.cartState$ = this.cartFacade.cartState$;
        this.buildForm();
        this.watchValueChanges();
    }

    onSave(): void {
        this.cartState$.pipe(take(1)).subscribe((cartState: CartState) => {
            const order = {
                id: '' + new Date().getTime(),
                cartProducts: { ...cartState.data },
                totalQuantity: cartState.totalQuantity,
                total: cartState.totalSum,
                ...this.orderForm.value
            } as Order;
            this.ordersService.add(order);
            this.cartFacade.buyAllProducts();
            alert('Your order has been accepted');
        });
    }

    onFirstNameBlur() {
        const firstNameControl = this.orderForm.get('firstName');
        this.firstNameValidationMessage = this.findValidationMessage(firstNameControl, 'firstName');
    }

    onEmailBlur() {
        const emailControl = this.orderForm.get('email');
        this.emailValidationMessage = this.findValidationMessage(emailControl, 'email');
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onAddPhone(): void {
        this.phones.push(this.buildPhone());
    }

    onRemovePhone(index: number): void {
        this.phones.removeAt(index);
    }

    private watchValueChanges() {
        this.watchFirstNameValueChanges();
        this.watchEmailValueChanges();
    }

    private watchFirstNameValueChanges() {
        const firstNameControl = this.orderForm.get('firstName');
        const sub = firstNameControl.valueChanges.subscribe(value =>
            this.firstNameValidationMessage = this.findValidationMessage(firstNameControl, 'firstName')
        );
        this.sub = sub;
    }

    private watchEmailValueChanges() {
        const emailControl = this.orderForm.get('email');
        const sub = emailControl.valueChanges
            .pipe(
                debounceTime(1000)
            )
            .subscribe(value => {
                this.emailValidationMessage = this.findValidationMessage(emailControl, 'email');
            });
        emailControl.statusChanges.subscribe(() => {
            this.emailValidationMessage = this.findValidationMessage(emailControl, 'email');
        });
        this.sub.add(sub);
    }

    private findValidationMessage(c: AbstractControl, controlName: string) {
        let msg = '';
        if ((c.touched || c.dirty) && c.errors) {
            msg = Object.keys(c.errors)
                .map(key => this.validationMessagesMap[controlName][key])
                .join(' ');
        }
        return msg;
    }

    private buildForm() {
        this.orderForm = this.formBuilder.group({
            firstName: ['', [
                Validators.required,
                CustomValidators.firstName
            ]],
            lastName: '',
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            pickup: true,
            address: '',
            phones: this.formBuilder.array([this.buildPhone()])
        });
    }

    private buildPhone() {
        return this.formBuilder.group({
            phone: ''
        });
    }

}
