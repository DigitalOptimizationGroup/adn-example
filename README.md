# Developer Preview

The Digital Optimization Group's platform is currently available through a developer preview. If you would like to join the waiting list for access please email us at preview@digitaloptgroup.com. If you already have access, welcome to Digital Optimization Group. This guide will allow you to explore your new app's features and become familiar with the platform.

## Documentation

https://docs.digitaloptgroup.com/

## <a name="creating-an-account" class="anchor"></a>Creating an account

If you have received an invitation link you can simply follow that URL and you will be redirected to Github to authenticate. The application only requires your public information and email address, it will not access any of your repositories. Once your account has been created you will have a full running application in the platform. You can immediately view the URLs associated with your app.

## <a name="urls" class="anchor"></a>Application URLs

You will need to replace `APP_ID` with your application id / project id to access the following URLs:

<b>Proxy</b><br/>

- https://APP_ID.edgebayes.com

<b>Backend colors</b><br/>

- https://blue-APP_ID.edgefisher.com
- https://green-APP_ID.edgefisher.com

<b>API for the headless CMS</b><br/>

- https://api-APP_ID.edgeyates.com/resolve-features/helloWorld

## <a name="install-cli" class="anchor"></a>Install the CLI

Get started by installing the Digital Optimization Group CLI.

```sh
npm install -g @digitaloptgroup/cli
```

Once installed you can see the help menu by running

```
dog
```

Most functionality is available under subcommands in the format `dog apps:build`. To see the full list of subcommands for a command run:

```
dog apps --help
```

And to see the options available for a specific command you can run that command with the `--help` flag.

```
dog apps:build --help
```

## <a name="exploring" class="anchor"></a>Exploring your app

When we created your app we configured the proxy to a/b test between your `blue` and `green` backends. If you visit your apps main URL, delete cookies, and refresh you should see the color changing: https://appId.edgebayes.com

In addition we have configured you CMS to work with our example application found at: https://github.com/DigitalOptimizationGroup/adn-example

You can fork and clone that repo and begin hacking.

Once you have the repo locally run `yarn` or `npm install`.

Edit `index.js` to update line 11

```js
const projectId = "YOUR_NEW_PROJECT_ID";
```

#### Login the CLI

```sh
dog login
```

#### Initialize the application

In the root directory of the example application run:

```sh
# when prompted choose your app id and create react app
dog apps:init
```

#### Update proxy to single backend

```sh
dog proxy:prod blue
dog proxy:apply
```

#### Build the application

To build the app run:

```sh
dog apps:build
```

#### Deploy to green backend

```
dog apps:apply green
```

#### Visit the backend with gatekeeping

```
dog proxy:gatekeep green
```

#### Canary release the new deployment

```
dog proxy:canary --production blue --canary green --weight 30
```

Visit your main URL and clear cookies several times. You should notice blue showing up more frequently than the new green backend.

#### Promote the new deployment to production

```
dog proxy:prod green
dog proxy:apply
```

## <a name="tail-logs" class="anchor"></a>Tail your logs in realtime

You can tail any of the logs available from your application in realtime.

#### Proxy Logs

Run the following command and then refresh your website. You should see a realtime stream of proxy logs output into your console.

```
dog logs:proxyLogs --prettyjson
```

#### Real User Monitoring

Run the following command and then refresh your website.

```
dog logs:performanceTiming --prettyjson
```

#### A/B test outcome

Run the following command and then open some tabs in the list of Star Wars characters.

```
dog logs:outcome --prettyjson
```

See a full list of available logs under the analytics section.

## <a name="preview-mode" class="anchor"></a>Open your website in realtime preview mode

By opening your website in realtime preview mode you will get as-you-type previews on your target website.

```
dog cms:preview
```

#### Open the CMS and edit some content

```
dog cms:login
```

Explore the documentation section "Headless CMS" to learn more about editing, previewing, and deploying content.

## <a name="custom-domain" class="anchor"></a>Add a custom domain name

You can point a custom subdomain at your application. Run the following command and point a CNAME from your subdomain to `custom-domain.edgebayes.com`. Domain validation happens inline\* with no additional steps required.

```
dog domains:add DOMAIN_NAME
```

\*See `dog domains:add --help` for additional validation options.
