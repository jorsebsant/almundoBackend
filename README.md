## Nodejs Backend

A simple express server using TypeScript... because _why not?_.

No errors implemented so far becouse of the scope of the development. If you want me to go further with this, just let me know!

### Installing Dependencies

`npm i`

### Running the server

`npm run serve`

You use a custom port with:

`PORT=1337 node index`

the current port is `:8008` which is the one used in the front-end side to make all the api calls.

### Compiling / Transpiling

If you change any `.ts` file you need to run the TypeScript compiler to generate the corresponding JavaScript files:

You will need the TypeScript compiler:

`npm i -g typescript`

Once you have the TypeScript compiler installed you can run:

`tsc`
