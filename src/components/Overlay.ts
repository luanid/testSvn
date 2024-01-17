/**
* @Author Mario Krause
* @file Overlay.ts
* @description
* @created 13.07.2022
* @last_edit: 01.07.2023
*/
/**
 * Usage:
 *  Show Overlay = overlay({show: true, spinner: true (optional), text: A Text(optional) , parent: parent-id, id: id overlay should have})
 *  Hide Overlay = overlay({show: false, id: 'login-spinner'})
 *  Change Text = overlay({text: Another Text , id: 'login-spinner'})
 *  Change Spinner = overlay({spinner: true or false, id: 'login-spinner'})
 *  Change Spinner = overlay({spinner: true or false, id: 'login-spinner'})
 *  Hide Spinner and Text = overlay({spinner: false, text: ' '(optional), id: 'login-spinner'})
 *
 *  TEXT: to hide the text make a space as letter ' ' !!!!!!
 * @param value
 */


export default function overlay(value: any){
  if(!value.text){
    const el = document.getElementById(value.id + '-text');
    if(el !== null){
      value.text = el.innerText;
    }
  }
  if(!value.secondText){
    const el = document.getElementById(value.id + '-second-text');
    if(el !== null){
      value.secondText = el.innerText;
    }
  }
  if(value.show){
    const spinner = "'/images/spinner.gif'";
    const old = document.getElementById(value.id);
    if(old){
      old.remove();
    }
    const el = document.getElementById(value.parent);
    if(el !== null){
      const o = document.createElement('div');
      o.id = value.id;
      if(value.zIndex)
        o.style.zIndex = value.zIndex;
      else
        o.style.zIndex = '999990';
      o.classList.add('prat-overlay');

      const s = document.createElement('div');
      s.classList.add('lds-ring');
      const s1 = document.createElement('span');
      s1.classList.add('loader');
      s.appendChild(s1);
      if(!value.spinner){
        s.style.display = 'none';
      }
      o.appendChild(s);

      const t = document.createElement('div');
      const sp = document.createElement('span');
      sp.id = value.id + '-text';
      sp.innerText = value.text;
      t.appendChild(sp);

      if(value.secondText){
        const br = document.createElement('br');
        t.appendChild(br);
        const spTwo = document.createElement('span');
        spTwo.id = value.id + '-second-text';
        spTwo.innerText = value.secondText;
        t.appendChild(spTwo);
      }

      t.classList.add('prat-overlay-text')
      o.appendChild(t);

      el.appendChild(o);
    }
    return;
  }
  if(value.show === null || value.show === undefined){
    const el = document.getElementById(value.id + '-text');
    if(el !== null){
      el.innerText = value.text;
    }
    if(value.secondText){
      const el = document.getElementById(value.id + '-second-text');
      if(el !== null){
        el.innerText = value.secondText;
      }
    }
    if(value.spinner){
      const el = document.getElementById(value.id + '-spinner');
      if(el !== null){
        el.style.display = 'block';
      }
    }
    if(value.spinner === false){ // Have to be false !!!!! Explicit Value
      const el = document.getElementById(value.id + '-spinner');
      if(el !== null){
        el.style.display = 'none';
      }
    }
    return;
  }
  if(value.show === false){
    const el = document.getElementById(value.id);
    if(el !== null){
      el.remove();
    }
    return;
  }
}
