## GIT

git clone https://bitbucket.org/ev45ive/sages-angular-adv-listopad.git sages-angular-adv-listopad
cd sages-angular-adv-listopad
npm i
npm run ng serve

<!-- lub -->

npm run ng serve --project=demo

## Git Update

git stash -u
git pull -f

## NVM

https://github.com/coreybutler/nvm-windows
https://github.com/coreybutler/nvm-windows/releases

## VsCode Extensions

https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode

## Instalacje

node -v
v18.12.0

npm -v
8.12.0

git -v
git version 2.37.3.windows.1

Vs Code
Help -> About
1.73.1

Google Chrome
chrome://version
107.0.5304.107

## Angular CLI

ng version
npm i -g @angular/cli

## Nx workspace

npx create-nx-workspace@latest --help

cd ..
npx create-nx-workspace sages-angular-adv-listopad
√ What to create in the new workspace · angular
√ Application name · demo
√ Default stylesheet format · scss
√ Use Nx Cloud? (It's free and doesn't require registration.) · No

> NX Nx is creating your workspace.

> NX NOTE First time using Nx? Check out this interactive Nx tutorial.

https://nx.dev/angular/tutorial/01-create-application

Prefer watching videos? Check out this free Nx course on YouTube.
https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco

# Generate UI lib

ng g @nrwl/angular:lib ui

# Add a component

ng g @nrwl/angular:component xyz --project ui

## Nx Graph

nx dep-graph

## UI Toolkits

https://material.angular.io/guide/getting-started
https://ng.ant.design/docs/introduce/en
https://www.primefaces.org/primeng/setup

## Angular Material

https://material.angular.io/guide/getting-started

ng add @angular/material

The package @angular/material@12.2.13 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes


## Angular Devtools

https://angular.io/guide/devtools
https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh
https://addons.mozilla.org/en-GB/firefox/addon/angular-devtools/

## Playlists module

npx nx generate @schematics/angular:module playlists --project=demo --module=app --route=playlists

npx nx generate @schematics/angular:component playlists/containers/playlists-view --project=demo --module=playlists --display-block --type=Container

npx nx generate @schematics/angular:component playlists/components/playlist-list 
npx nx generate @schematics/angular:component playlists/components/playlist-details 
npx nx generate @schematics/angular:component playlists/components/playlist-editor 

## Shared module

npx nx generate @schematics/angular:module shared --module=app
npx nx generate @schematics/angular:component shared/components/clock --export 

## Core module

npx nx generate @schematics/angular:module core --module=app
npx nx generate @schematics/angular:service core/services/playlist-store 

## Music Search module

npx nx generate @schematics/angular:module music --project=demo --module=app --route=music

npx nx generate @schematics/angular:component music/containers/album-search-view --project=demo --module=music --display-block --type=Container
npx nx generate @schematics/angular:component music/containers/album-details-view --project=demo --module=music --display-block --type=Container

npx nx generate @schematics/angular:component music/components/search-form
npx nx generate @schematics/angular:component music/components/results-grid
npx nx generate @schematics/angular:component music/components/album-card 

npx nx generate @schematics/angular:interface core/models/album 
npx nx generate @schematics/angular:service core/services/music-store 


## Mocking REST API in browser
https://mswjs.io/

## Clean Architecture 
https://medium.com/taager-tech-blog/clean-architecture-for-angular-applications-b7ab140f0d5a

## RxJS Operators
https://rxmarbles.com/#map 
https://rxjs.dev/api/operators/map
https://rxjs.dev/operator-decision-tree
https://rxviz.com/examples/mouse-move
https://www.learnrxjs.io/learn-rxjs/operators



## ErrorService - Log Telemetry

https://docs.datadoghq.com/integrations/rum_angular/

https://docs.sentry.io/platforms/javascript/guides/angular/configuration/integrations/plugin/

## TS Data Parsing  - ZodTS + Ts-Pattern
https://github.com/colinhacks/zod 

https://github.com/gvergnaud/ts-pattern