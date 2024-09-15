import { Injectable } from '@angular/core';
import * as jp from 'jsonpath';

@Injectable({
  providedIn: 'root'
})

export class TxtTranCodeService {

  constructor() { }

  jsonToTranCode(objectDatabase: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const configMotor = require(`./configMotorTranCode.json`);

            let lineTranCodeString = '';

            for (const key in configMotor) {
                const config = configMotor[key];
                let value = "";
                let addSpace = "";
                let cut = "";

                try { value = jp.query(objectDatabase, `$..${config.getFieldByName}`)[0]; } catch (error) { value = ""; }
                try { if ((value === "") || (value === undefined)) { value = config.defaultValue; } } catch (error) { value = ""; }
                if (value === undefined) { value = ""; }
                value = String(value);
                try { value = value.replace(/\n/g, ' ');} catch (error) {}
                try { cut = value.slice(0, config.width); } catch (error) { cut = "" }

                if (config?.typeFill === "end") {
                    addSpace = cut.padEnd(config.width, (config?.fill || " "));
                } else {
                    addSpace = cut.padStart(config.width, (config?.fill || " "));
                }

                lineTranCodeString += addSpace;
            }
            lineTranCodeString = lineTranCodeString.padEnd(2000, ' ');
            resolve(lineTranCodeString);

        } catch (error) {
            reject(error);
        }
    });
  }

}
