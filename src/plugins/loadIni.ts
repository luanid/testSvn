/**
 * @Author Mario Krause
 * @file loadIni.ts
 * @description
 * @created 13.07.2022
 * @last_edit: 01.07.2023
 */

//import fs from 'fs'; // Use with File https://github.com/npm/ini
import ini from 'ini';
import { useIniStore } from "@/stores/iniStore";
export function readIni(){
  //const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8')) // use with file
  const el = document.getElementById('appIni');
  if(el){
    let config = ini.parse(el.innerHTML);
    setTimeout(()=>{
      const ini = useIniStore();
      ini.setAppName(config.CONFIGURATION.APP_NAME);
    }, 1000)
  }
}

