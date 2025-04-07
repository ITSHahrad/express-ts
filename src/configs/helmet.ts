import { HelmetOptions } from 'helmet';

const helmetConfig: HelmetOptions = {
    contentSecurityPolicy: true,
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: true, 
    crossOriginResourcePolicy: true,
    dnsPrefetchControl: true,
    frameguard: true,
    hidePoweredBy: true,
    hsts: true,
    ieNoOpen: true,
    noSniff: true,
    referrerPolicy: true,
    xssFilter: true
};

export default helmetConfig;