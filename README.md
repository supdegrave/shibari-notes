# Angular client and Node.js server projects for a shibari note library.

## Set up mongoDB hosting

For development purposes this can be local, MongoDB Cloud, etc. There are numerous resources online for setting this up, so it won't be covered here.

By default, the existing code will use `process.env.MONGODB_URI` or a local mongodb instance. To change this, modify the value of `const mongoUrl` as appropriate in `./shibari-notes/server/lib/app.ts`:


```ts
private mongoSetup(): void {
    const mongoUrl: string = process.env.MONGODB_URI
        || 'mongodb://localhost:27017/shibari-notes]';
    const options = { useNewUrlParser: true };

    mongoose.connect(mongoUrl, options)
        .then(this.mongoose_onConnectSuccess)
        .catch(this.mongoose_onConnectError);
}
```
