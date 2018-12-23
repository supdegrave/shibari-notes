# Angular client and Node.js server projects for a shibari note library. 

## Set up mongoDB hosting

For development purposes this can be local, MongoDB Cloud, etc. There are numerous resources online for setting this up, so it won't be covered here. 

### Define mongoUrl outside of Git scope

Create a file at `./shibari-notes/server/mongo-url.ts` (included in .gitignore) containing an appropriate url, something like the following:

```ts
// localhost
export const mongoUrl: string = 'mongodb://localhost/shibari-notes';

// MongoDB Cloud format, copied from online configuration. Something like:
export const mongoUrl: string = 'mongodb+srv://<username>:<password>@<shibari-notes-server-instance>.mongodb.net/test?retryWrites=true';
```

Alternately, make the following changes in `./shibari-notes/server/lib/app.ts`: 

* remove the following: 

```ts
import { mongoUrl } from '../mongo-url';
```

* define `mongoUrl` in `mongoSetup`: 

```ts
private mongoSetup(): void {
    const mongoUrl: string = <your_connection_string_here>;
    mongoose.connect(mongoUrl)
        .then((result: typeof mongoose) => /* ... */)
        .catch((reason) => /* ... */);
}
```


