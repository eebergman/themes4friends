import { Injectable, EventEmitter } from '@angular/core';

export interface SiteTheme {
  name: string;
  accent: string;
  primary: string;
  isDark: boolean;
  isDefault: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeStorageService {
  static storageKey = 'site-theme-storage-current-name';

  onThemeUpdate: EventEmitter<SiteTheme> = new EventEmitter<SiteTheme>();

  storeTheme(theme: SiteTheme) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = theme.name;
    } catch {}
    this.onThemeUpdate.emit(theme);
  }

  getStoredThemeName(): string | null {
    let retVal: string | null = null;
    try {
      retVal = window.localStorage[ThemeStorageService.storageKey] || null;
    } catch {
      retVal = null;
    }
    return retVal;
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.storageKey);
    } catch {}
  }
}
