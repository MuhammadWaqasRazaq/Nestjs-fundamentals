# Project & Build

nest n my-app                  # Create new project
nest n my-app -s               # Create project without installing npm packages
nest n my-app -p pnpm          # Create project using pnpm (or yarn/npm)
nest b                         # Build project (compiles to dist/)
nest start                     # Run project
nest start -w                  # Run in watch mode (auto restart on save)
nest start -d -w               # Run in watch mode with debugger
nest i                         # Show NestJS environment and system info


# Generate Resources (CRUD & Core)

nest g res users               # Full CRUD (Module, Service, Controller, DTOs)
nest g mo users                # Module
nest g co users                # Controller
nest g s users                 # Service


# Generate Middleware, Guards & Pipes

nest g gu auth                 # Guard (auth/roles)
nest g pi validation           # Pipe (data validation)
nest g mi logger               # Middleware (request logging)
nest g itc transform           # Interceptor (response mapping)
nest g f http-exception        # Filter (error handling)


# Generate Types & Helpers

nest g cl user                 # Class
nest g itf user                # Interface
nest g d user                  # Custom Decorator
nest g ga events               # WebSocket Gateway
nest g r users                 # GraphQL Resolver


# Common Flags to Add

nest g s users --no-spec       # Skip creating .spec.ts test file
nest g s users --flat          # Do not create a new subfolder
nest g res users --dry-run     # Preview files without writing to disk