import { html, render } from 'iares';
import { TRoute } from 'iares';

import { AppDefault } from '@/components/AppDefault';
import { AppSignin } from '@/components/AppSignin';
import { AppSigninVerification } from '@/components/AppSigninVerification';
import { AppLogin } from '@/components/AppLogin';
import { AppList } from '@/components/AppList';
import { AppChat } from '@/components/AppChat';
import { AppAddContact } from '@/components/AppAddContact';

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: '#/404',
    mount: ({ context }) => {
      render(html`<${AppDefault} />`, context);
    },
  },
  {
    regex: /^#\/login$/,
    start: '#/login',
    mount: ({ context }) => {
      const tabs = [
        { id: 1, title: 'Login', icon: 'logout' },
        { id: 2, title: 'Verification', icon: 'verified_user' },
      ];

      render(html`<${AppLogin} tabs=${tabs} />`, context);
    },
  },
  {
    regex: /^#\/signin$/,
    mount: ({ context }) => {
      const tabs = [
        { id: 1, title: 'signin', icon: 'logout' },
        { id: 2, title: 'Verification', icon: 'verified_user' },
      ];

      render(html`<${AppSignin} tabs=${tabs} />`, context);
    },
  },
  {
    regex: /^#\/signin\/verification$/,
    mount: ({ context }) => {
      const tabs = [
        { id: 1, title: 'Login', icon: 'logout' },
        { id: 2, title: 'Verification', icon: 'verified_user' },
      ];

      render(html`<${AppSigninVerification} tabs=${tabs} />`, context);
    },
  },
  {
    regex: /^#\/list$/,
    mount: ({ context }) => {
      const tabs = [
        { id: 1, title: 'list', icon: 'logout' },
        { id: 2, title: 'Verification', icon: 'verified_user' },
      ];

      render(html`<${AppList} tabs=${tabs} />`, context);
    },
  },
  {
    regex: /^#\/chat$/,
    mount: ({ context }) => {
      const tabs = [
        { id: 1, title: 'chat', icon: 'logout' },
        { id: 2, title: 'Verification', icon: 'verified_user' },
      ];

      render(html`<${AppChat} tabs=${tabs} />`, context);
    },
  },
  {
    regex: /^#\/contact$/,
    mount: ({ context }) => {
      const tabs = [
        { id: 1, title: 'contact', icon: 'logout' },
        { id: 2, title: 'Verification', icon: 'verified_user' },
      ];

      render(html`<${AppAddContact} tabs=${tabs} />`, context);
    },
  },
];
