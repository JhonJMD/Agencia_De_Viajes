import express from 'express';

const router = express.Router();

// RUTAS GET
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

// RUTAS POST
router.post('/testimoniales', guardarTestimonial);

export default router;


