import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const start = performance.now();
        if (req.url.includes('products')) {
            return next.handle(req)
                .pipe(
                    map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            // console.info не проходит линтинг
                            console.log(`TimingInterceptor: ${req.url} took ${performance.now() - start} ms`);
                            return event;
                        }
                    }));
        } else {
            return next.handle(req);
        }
    }

}
