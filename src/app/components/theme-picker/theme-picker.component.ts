import { Component, OnDestroy, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {
  ThemeStorageService,
  SiteTheme
} from './theme-storage/theme-storage.service';
import { StyleManagerService } from './style-manager/style-manager.service';

@Component({
  selector: 'the-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit, OnDestroy {
  private _queryParamSubscription = Subscription.EMPTY;
  currentTheme: SiteTheme;

  themes: SiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      name: 'deeppurple-amber',
      isDark: false,
      isDefault: false
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      name: 'pink-bluegrey',
      isDark: true,
      isDefault: false
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      name: 'purple-green',
      isDark: true,
      isDefault: false
    }
  ];

  constructor(
    public styleManager: StyleManagerService,
    private _themeStorage: ThemeStorageService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.installTheme(this._themeStorage.getStoredThemeName());
  }

  ngOnInit() {
    this._queryParamSubscription = this._activatedRoute.queryParamMap
      .pipe(
        map(params => params.get('theme')),
        filter(Boolean)
      )
      .subscribe(themeName => this.installTheme(themeName));
  }

  ngOnDestroy() {
    this._queryParamSubscription.unsubscribe();
  }

  installTheme(themeName: string) {
    const theme = this.themes.find(
      currentTheme => currentTheme.name === themeName
    );

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/${theme.name}.css`);
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }
}
