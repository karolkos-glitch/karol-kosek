import { useCallback, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import type { CookieSetOptions } from 'universal-cookie';

const defaultCookiesConfig: CookieSetOptions = {
  path: '/'
};

export const useAcceptCookies = (cookieName: string = 'ACCEPT_COOKIE_NAME', cookietypes: string[]) => {
  const trakckingSettingsObject = cookietypes.reduce((acc,curr) => ({
    ...acc,
    [curr]: false,
  }), {});
  const cookiesHandler = useMemo(()=> new Cookies(), []);
  const [showUI, setShowUI] = useState<boolean>(!cookiesHandler.get(cookieName));
  const [showTrackingSettings, setShowTrackingSettings] = useState<boolean>(false);

  const openTrackingSettingsUI = () => {
    setShowUI(false);
    setShowTrackingSettings(true);
  };

  const _setCookie = useCallback(<T>(value: T, cookiesConfig: CookieSetOptions)=>{
    cookiesHandler.set(cookieName, value, cookiesConfig);
  },[cookieName, cookiesHandler]);

  const acceptCookies = useCallback((cookiesConfig: CookieSetOptions = defaultCookiesConfig) => {
    _setCookie('', cookiesConfig);
    setShowUI(false);
    setShowTrackingSettings(false);
  },[_setCookie]);

  const setTrackingSetting = useCallback(<T>(value: T, cookiesConfig: CookieSetOptions = defaultCookiesConfig) => {
    _setCookie(value, cookiesConfig);
    setShowTrackingSettings(false);
  },[_setCookie]);


  return {
    showUI,
    showTrackingSettings,
    openTrackingSettingsUI,
    acceptCookies,
    setTrackingSetting
  }
}