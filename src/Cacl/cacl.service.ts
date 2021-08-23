import {Injectable} from "@nestjs/common";

@Injectable()
export class CalcService {
    getHello(): string {
        return 'Hello World!';
    }
}