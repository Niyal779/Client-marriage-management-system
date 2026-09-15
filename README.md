# Marriage Register

A standalone, local-first Marriage Register management system.

## Run

Use VS Code's **Live Server** extension, or run `php -S localhost:8000` and open `http://localhost:8000`.

## Login

Username: `Jihadul`  
Password: `jihad1234`

Change these values in `js/auth.js`, in the `credentials` constant.

## Data

Records are permanently stored in Supabase, so they are shared across every browser and device. The application includes no Excel upload or download features.

The initial dataset was read from `marriage_register.xlsx` and embedded in `js/initial-data.js`. On a new Supabase database it is inserted once; existing cloud data is never reset or overwritten on launch.

## Future backend

`js/storage.js` is the persistence boundary. Replace its methods with authenticated API calls, and replace the local-only logic in `js/auth.js` with server-side sessions and password hashing.
