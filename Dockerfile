# Use the official PHP image with Apache (Apache will serve Laravel)
FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    libzip-dev \
    zip \
    npm \
    && docker-php-ext-install pdo pdo_mysql zip

# Enable Apache mod_rewrite (for Laravel's routing)
RUN a2enmod rewrite

# Install Composer (for managing PHP dependencies)
COPY --from=composer:2.5 /usr/bin/composer /usr/bin/composer

# Copy application files into the container
COPY . .

# Install PHP dependencies (use --no-dev for production)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Install Node.js dependencies and build assets (using npm run production for production build)
RUN npm install
RUN npm run build  # Make sure you're using `npm run production` for optimized build

# Set proper permissions for storage and cache directories
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose the port Render expects for web services
# Render automatically assigns an available port in the `PORT` environment variable
ENV APP_PORT=8000
EXPOSE $APP_PORT

# Start Apache in the foreground (Apache will handle serving the app)
CMD ["apache2-foreground"]

