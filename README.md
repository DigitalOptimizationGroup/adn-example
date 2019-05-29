# Digital Optimization Group - Developer Preview Example App

This is an example application built on React Create App and designed to be deployed into Digital Optimization Group's Application Delivery Network.

### Prerequisites - This requires an account

You will need to have an account on the Digital Optimization Group platform to deploy and use this application.

You can request an invitation to our developer preview by emailing devs@digitaloptgroup.com or getting one from someone who already has access.

# Usage

Given an invite link, you will be able to sign-up and create an account by logging in via Github. Once your account has been created follow these steps:

Fork or clone this repo, enter the directory, and run `npm install`

```
git clone https://github.com/DigitalOptimizationGroup/adn-example.git
cd adn-example
npm install
```

Install the CLI for our Application Delivery Network

```
npm install -g @digitaloptgroup/cli
```

Login to the CLI (this requires you have already created an account)

```
dog login
```

Initialize the example app with your newly created account.

```
dog init

# When prompted:
# - choose your App Id
# - choose "Create React App" for the application type
```

Build and deploy the app

```
npm run build
dog apps:deploy blue --force
```

Visit your app at: https://[APP_ID].edgebayes.com

When we first created your Application we created a `blue` and a `green` backend that you can use as deploy targets. When you visit your application, you may see the example app or you may see a green screen. Delete your cookies and refresh to see this behavior.

You can make blue your only production backend by running:

```
dog proxy:prod blue
dog proxy:apply
```

# What can this App do?
