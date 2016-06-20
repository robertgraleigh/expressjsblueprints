// routes.js

app.get('/Users/register', userRoutes.showRegistrationForm);
app.post('/Users/register', userRoutes.createUser);
app.get('/Users/login', userRoutes.showLoginForm);
app.post('/Users/login', userRoutes.createSession);
