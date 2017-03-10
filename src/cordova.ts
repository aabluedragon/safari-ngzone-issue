/**
 * Created by alonamir on 17/05/2016.
 */

export let cordovaDidLoad: boolean = false;

export type PlatformType = 'ios' | 'android' | 'browser';

export function detectPlatform() : PlatformType {
  const ua: string = navigator.userAgent;
  if(
    (ua.indexOf('iPhone') != -1 || ua.indexOf('iPad') != -1)
    && ua.indexOf('Safari') == -1
  ) {
    // note(alonam)
    // Only in actual cordova app, not in browser even if it's a real device.
    return 'ios';
  } else if(ua.indexOf('Android') != -1 && ua.indexOf('Crosswalk') != -1) {
    // note(alonam)
    // Only in actual Crosswalk app, not in browser even if it's a real device.
    // Unfortunately, Cordova userAgent is equal to Android Browser userAgent, so if we ever remove the
    // Crosswalk plugin, we cannot differentiate between the environments (cordova vs browser).
    return 'android';
  } else {
    return 'browser';
  }
}

export const detectedPlatform: PlatformType = detectPlatform();

export function loadCordova() {

  return new Promise((resolve, reject) => {
    if(cordovaDidLoad) {
      reject(Error('Cordova already loaded.'));
      return;
    }

    let timer = setTimeout(()=>{
      reject(Error('Failed to load cordova.'));
    }, 5000);

    document.addEventListener('deviceready', (arg) => {
      clearTimeout(timer);
      cordovaDidLoad = true;
      resolve(arg);
    });

    require(`../cordova/exportjs/${detectedPlatform}/cordova.js`);
  });

}
