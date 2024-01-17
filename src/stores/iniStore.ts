/**
 * @Author Mario Krause
 * @file iniStore.ts
 * @description
 * @created 01.07.2023
 * @last_edit: 01.07.2023
 */

import { defineStore } from 'pinia'
import type {IniModel} from "@/models/ini.model";

type State = {
  Ini: IniModel
};

export const useIniStore = defineStore('IniStore',{
  state: (): State => ({
    Ini:{appName: ''}
  }),
  getters: {
    getAppName: (State) => State.Ini.appName
  },
  actions:{
    setAppName(appName: string){
      this.Ini.appName = appName;
    }
  },
  persist: true,
});