import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { UserDto } from "src/users/dtos/user.dto";
import {map} from "rxjs/operators";

interface ClassConstructor {
	new (...args: any[]) : {};
}

export function Serialize(dto: ClassConstructor){
	return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
	constructor(private dto: any){}
	
	intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
		return handler.handle().pipe(
			map((data: any) => {
				return plainToClass(UserDto, data, {
					excludeExtraneousValues: true,
				});
				
			})
		)
	}
}