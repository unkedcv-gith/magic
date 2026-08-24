import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Sparkles, PartyPopper, Cake, Star, ChevronLeft, ChevronRight, Menu, X, CheckCircle2, Users, Tent, MapPin, Heart, HelpCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { format, addMonths, startOfToday, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import logoImg from './assets/images/logo.svg';
import galeria1 from './assets/images/galeria_1.jpg';
import galeria2 from './assets/images/galeria_2.jpg';
import galeria3 from './assets/images/galeria_3.jpg';
import galeria4 from './assets/images/galeria_4.jpg';
import galeria5 from './assets/images/galeria_5.jpg';
import galeria6 from './assets/images/galeria_6.jpg';
import galeria7 from './assets/images/galeria_7.jpg';
import galeria8 from './assets/images/galeria_8.jpg';
import galeria9 from './assets/images/galeria_9.jpg';
import galeria10 from './assets/images/galeria_10.jpg';
import galeria11 from './assets/images/galeria_11.jpg';
import personajesImg from './assets/images/personajes.png';

const HERO_IMAGES = [galeria10, galeria6, galeria11];
const GALLERY_IMAGES = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria7, galeria8, galeria9, galeria11];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isBooked, setIsBooked] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const formattedDate = format(selectedDate, "dd/MM/yyyy");
    const text = `Hola! Quiero consultar disponibilidad para una reserva.%0A%0A*Cumpleañero/a:* ${customerName}%0A*Mi teléfono:* ${customerPhone}%0A*Fecha:* ${formattedDate}%0A*Horario:* ${selectedTime}`;
    
    setIsBooked(true);
    window.open(`https://wa.me/5492216204716?text=${text}`, '_blank');

    setTimeout(() => {
      setIsBooked(false);
      setSelectedDate(undefined);
      setSelectedTime("");
      setCustomerName("");
      setCustomerPhone("");
    }, 5000);
  };

  return (
    <div className="min-h-screen font-sans bg-[#D1C4E9] text-[#673AB7] selection:bg-pink-400 selection:text-white overflow-x-hidden relative">
      {/* Floating Theme Decor */}
      <div className='absolute top-10 left-10 text-yellow-300 opacity-60 text-4xl select-none pointer-events-none z-0'>★</div> 
      <div className='absolute top-40 right-20 text-pink-400 opacity-60 text-3xl rotate-12 select-none pointer-events-none z-0'>❤</div> 
      <div className='absolute bottom-20 left-1/4 text-blue-400 opacity-60 text-2xl select-none pointer-events-none z-0'>●</div> 
      <div className='absolute top-20 right-1/2 text-[#FFEB3B] opacity-60 text-3xl select-none pointer-events-none z-0'>✦</div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/60 backdrop-blur-md border-b-2 border-[#673AB7] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between md:justify-center items-center py-2 min-h-[80px]">
            <div className="flex-shrink-0 flex items-center md:absolute md:left-4 z-20">
              <div className="w-28 h-28 transform hover:scale-105 transition-transform -my-4 relative">
                <img src={logoImg} alt="Magic Multi" className="w-full h-full object-contain drop-shadow-xl" />
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border-2 border-[#673AB7] items-center shadow-sm z-10">
              <a href="#inicio" className="font-black text-[#673AB7] hover:text-pink-500 transition-colors">Inicio</a>
              <a href="#servicios" className="font-black text-[#673AB7] hover:text-pink-500 transition-colors">Servicios</a>
              <a href="#galeria" className="font-black text-[#673AB7] hover:text-pink-500 transition-colors">Galería</a>
              <a href="#reservas" className="font-black text-[#673AB7] hover:text-pink-500 transition-colors">Reservas</a>
              <a href="#contacto" className="font-black text-[#673AB7] hover:text-pink-500 transition-colors">Contacto</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#673AB7] p-2 rounded-xl border-2 border-transparent focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white/90 backdrop-blur-md border-b-2 border-[#673AB7] overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
                <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="font-black text-[#673AB7] text-lg text-center p-2 rounded-xl hover:text-pink-500 hover:bg-pink-50 transition-colors">Inicio</a>
                <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="font-black text-[#673AB7] text-lg text-center p-2 rounded-xl hover:text-pink-500 hover:bg-pink-50 transition-colors">Servicios</a>
                <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="font-black text-[#673AB7] text-lg text-center p-2 rounded-xl hover:text-pink-500 hover:bg-pink-50 transition-colors">Galería</a>
                <a href="#reservas" onClick={() => setIsMenuOpen(false)} className="font-black text-[#673AB7] text-lg text-center p-2 rounded-xl hover:text-pink-500 hover:bg-pink-50 transition-colors">Reservas</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="font-black text-[#673AB7] text-lg text-center p-2 rounded-xl hover:text-pink-500 hover:bg-pink-50 transition-colors">Contacto</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Slider */}
      <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[500px] overflow-hidden z-10" id="inicio">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#673AB7]/50 to-[#673AB7]/0 pointer-events-none"></div>
        
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={HERO_IMAGES[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Cumpleaños mágico"
          />
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center px-4"
          >
            <span className='bg-[#FFEB3B] px-6 py-2 rounded-full text-sm font-black uppercase mb-6 inline-block text-[#673AB7] shadow-lg'>¡Reserva hoy mismo!</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Hacemos tus <br /> <span className='text-pink-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]'>Sueños</span> Realidad
            </h1>
            <p className="text-xl md:text-3xl text-white max-w-3xl font-bold mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              El pelotero más divertido de la ciudad con animaciones mágicas, shows y meriendas increíbles.
            </p>
            <a href="#reservas" className="inline-block bg-[#673AB7] text-white text-xl px-12 py-5 rounded-3xl font-black shadow-[0_8px_0_0_#4527A0] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#4527A0] active:translate-y-[2px] active:shadow-[0_4px_0_0_#4527A0] transition-all border-2 border-white">
              VER DISPONIBILIDAD
            </a>
          </motion.div>
        </div>

        {/* Personajes */}
        <motion.img 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          src={personajesImg} 
          alt="Personajes Mágicos" 
          className="absolute bottom-0 left-0 md:left-10 z-20 w-auto max-h-[40%] md:max-h-[55%] object-contain pointer-events-none"
        />

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-[#FFEB3B] w-6' : 'bg-white/60'}`}
            />
          ))}
        </div>
      </section>

      {/* 5 Pasos para organizar tu fiesta */}
      <section className="py-20 px-4 max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <span className="bg-[#FFEB3B] px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block text-[#673AB7] shadow-sm">GUÍA PARA PAPÁS</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#673AB7] mb-4">5 Pasos para Organizar tu Fiesta</h2>
          <p className="text-xl text-[#673AB7]/80 font-medium max-w-2xl mx-auto">Evitá el estrés y disfrutá el proceso con estos consejos clave que siempre compartimos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#673AB7]/20 flex flex-col items-center text-center shadow-lg relative group hover:-translate-y-2 transition-transform">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#673AB7] text-white rounded-full flex items-center justify-center font-black text-2xl border-4 border-white shadow-md z-10">1</div>
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mb-4 border-2 border-pink-200 group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8" /></div>
            <h3 className="text-lg font-black text-[#673AB7] uppercase mb-2 leading-tight">El Salón</h3>
            <p className="text-sm text-[#673AB7]/70 font-medium">Sin fecha y sin lugar no hay cumple. En vacaciones y fines de semana las fechas vuelan.</p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#673AB7]/20 flex flex-col items-center text-center shadow-lg relative group hover:-translate-y-2 transition-transform md:mt-8">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#673AB7] text-white rounded-full flex items-center justify-center font-black text-2xl border-4 border-white shadow-md z-10">2</div>
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-[#FBC02D] mb-4 border-2 border-yellow-200 group-hover:scale-110 transition-transform"><Calendar className="w-8 h-8" /></div>
            <h3 className="text-lg font-black text-[#673AB7] uppercase mb-2 leading-tight">La Fecha</h3>
            <p className="text-sm text-[#673AB7]/70 font-medium">Elegir el día desde el principio te da más opciones. ¡No lo dejes para el final!</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#673AB7]/20 flex flex-col items-center text-center shadow-lg relative group hover:-translate-y-2 transition-transform">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#673AB7] text-white rounded-full flex items-center justify-center font-black text-2xl border-4 border-white shadow-md z-10">3</div>
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-4 border-2 border-blue-200 group-hover:scale-110 transition-transform"><Users className="w-8 h-8" /></div>
            <h3 className="text-lg font-black text-[#673AB7] uppercase mb-2 leading-tight">Cantidad de Invitados</h3>
            <p className="text-sm text-[#673AB7]/70 font-medium">¿20, 40 o 60? Tener un estimado te permite elegir el lugar correcto sin problemas de capacidad.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#673AB7]/20 flex flex-col items-center text-center shadow-lg relative group hover:-translate-y-2 transition-transform md:mt-8">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#673AB7] text-white rounded-full flex items-center justify-center font-black text-2xl border-4 border-white shadow-md z-10">4</div>
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4 border-2 border-green-200 group-hover:scale-110 transition-transform"><PartyPopper className="w-8 h-8" /></div>
            <h3 className="text-lg font-black text-[#673AB7] uppercase mb-2 leading-tight">La Animación</h3>
            <p className="text-sm text-[#673AB7]/70 font-medium">Los chicos recuerdan cuánto se divirtieron. Reservar buenas actividades hace la diferencia.</p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#673AB7]/20 flex flex-col items-center text-center shadow-lg relative group hover:-translate-y-2 transition-transform">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#673AB7] text-white rounded-full flex items-center justify-center font-black text-2xl border-4 border-white shadow-md z-10">5</div>
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mb-4 border-2 border-purple-200 group-hover:scale-110 transition-transform"><Clock className="w-8 h-8" /></div>
            <h3 className="text-lg font-black text-[#673AB7] uppercase mb-2 leading-tight">Organizar el Tiempo</h3>
            <p className="text-sm text-[#673AB7]/70 font-medium">Preguntá: ¿Cuánto antes puedo ingresar? ¿A qué hora finaliza? Así estarás mucho más tranquilo.</p>
          </div>
        </div>
      </section>

      {/* Services Section / Propuesta */}
      <section className="py-20 px-4 z-10 relative bg-white/40 border-y-8 border-dashed border-[#673AB7]/10" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#FFEB3B] px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block text-[#673AB7] shadow-sm">NUESTRA PROPUESTA</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#673AB7] mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-[#673AB7]/80 font-medium max-w-2xl mx-auto">No te quedes solo con el precio. Asegurate de que la fiesta sea un éxito con nosotros.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pregunta 1 */}
            <div className="bg-pink-100 p-8 rounded-[40px] border-4 border-pink-200 flex items-start text-left shadow-lg rotate-[-1deg] hover:rotate-0 transition-all duration-300 gap-6">
              <div className="text-4xl bg-white p-4 rounded-full border-4 border-pink-200 shrink-0">
                <HelpCircle className="w-10 h-10 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#673AB7] uppercase mb-3">¿Qué incluye el presupuesto?</h3>
                <ul className="text-[#673AB7]/80 font-bold text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" /> Animación, Moza, Ayudante de cocina</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" /> Juegos, Maquillaje artístico</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" /> Piñata, Sonido e Iluminación</li>
                </ul>
                <div className="mt-4 bg-white/60 p-3 rounded-2xl text-xs font-black text-pink-600 border border-pink-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Así evitás sorpresas de último momento.
                </div>
              </div>
            </div>
            
            {/* Pregunta 2 */}
            <div className="bg-yellow-100 p-8 rounded-[40px] border-4 border-yellow-200 flex items-start text-left shadow-lg rotate-[1deg] hover:rotate-0 transition-all duration-300 gap-6">
              <div className="text-4xl bg-white p-4 rounded-full border-4 border-yellow-200 shrink-0">
                <HelpCircle className="w-10 h-10 text-[#FBC02D]" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#673AB7] uppercase mb-3">¿Quién acompaña a los chicos?</h3>
                <ul className="text-[#673AB7]/80 font-bold text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FBC02D] shrink-0" /> Personal para organizar actividades</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FBC02D] shrink-0" /> Capacidad para contener a los chicos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FBC02D] shrink-0" /> Flexibilidad para adaptarse a cada edad</li>
                </ul>
                <div className="mt-4 bg-white/60 p-3 rounded-2xl text-xs font-black text-yellow-700 border border-yellow-300 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> ¡Mientras ellos se divierten, vos disfrutás!
                </div>
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="bg-blue-100 p-8 rounded-[40px] border-4 border-blue-200 flex items-start text-left shadow-lg rotate-[1deg] hover:rotate-0 transition-all duration-300 gap-6">
              <div className="text-4xl bg-white p-4 rounded-full border-4 border-blue-200 shrink-0">
                <HelpCircle className="w-10 h-10 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#673AB7] uppercase mb-3">¿Chicos de distintas edades?</h3>
                <p className="text-[#673AB7]/80 font-bold text-sm mb-3">No todos juegan igual. Tenemos propuestas para:</p>
                <ul className="text-[#673AB7]/80 font-bold text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Los más pequeños (sector adaptado)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Los chicos de primaria (juegos dinámicos)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Los más grandes (actividades acordes)</li>
                </ul>
                <div className="mt-4 bg-white/60 p-3 rounded-2xl text-xs font-black text-blue-700 border border-blue-200 flex items-center gap-2">
                  <PartyPopper className="w-4 h-4" /> Así nadie se queda afuera de la diversión.
                </div>
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className="bg-green-100 p-8 rounded-[40px] border-4 border-green-200 flex items-start text-left shadow-lg rotate-[-1deg] hover:rotate-0 transition-all duration-300 gap-6">
              <div className="text-4xl bg-white p-4 rounded-full border-4 border-green-200 shrink-0">
                <HelpCircle className="w-10 h-10 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#673AB7] uppercase mb-3">¿Qué espacios tiene el salón?</h3>
                <p className="text-[#673AB7]/80 font-bold text-sm mb-3">No alcanza con que sea lindo, debe ser funcional.</p>
                <ul className="text-[#673AB7]/80 font-bold text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Sector exclusivo para jugar</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Espacio cómodo para adultos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Lugar distribuido para comer cómodos</li>
                </ul>
                <div className="mt-4 bg-white/60 p-3 rounded-2xl text-xs font-black text-green-700 border border-green-300 flex items-center gap-2">
                  <Star className="w-4 h-4" /> Más comodidad para toda la fiesta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 relative z-10 max-w-7xl mx-auto" id="galeria">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#673AB7] mb-4">Nuestra Magia en Fotos</h2>
          <p className="text-xl text-[#673AB7]/80 font-medium">Un vistazo a los momentos inolvidables en Magic Multi eventos.</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-3xl overflow-hidden border-4 border-white shadow-lg">
              <img src={img} alt={`Galería ${idx + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#673AB7]/0 group-hover:bg-[#673AB7]/20 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 relative z-10" id="reservas">
        <div className="max-w-5xl mx-auto bg-white rounded-[50px] shadow-2xl p-8 md:p-12 border-2 border-white flex flex-col gap-6 relative">
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#FFEB3B] border-2 border-[#673AB7] px-6 py-2 rounded-full whitespace-nowrap shadow-md">
            <span className="text-sm font-black text-[#673AB7] uppercase tracking-wider">TURNERO ONLINE</span>
          </div>

          <div className="text-center mt-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#673AB7] mb-4">Reserva tu Turno</h2>
            <p className="text-lg text-[#673AB7]/80 font-medium mb-2">Elegir la fecha con tiempo te ayuda a encontrar más opciones disponibles.</p>
            <p className="text-sm text-pink-500 font-black uppercase tracking-wide">¡No esperes demasiado! Las mejores fechas se agotan rápido.</p>
          </div>

          {isBooked ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 rounded-3xl p-10 text-center border-2 border-green-200 max-w-lg mx-auto"
            >
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-green-700 mb-2">¡Solicitud Enviada!</h3>
              <p className="text-green-600 font-medium">Nos contactaremos contigo muy pronto para confirmar los detalles. ¡Prepárate para la diversión!</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calendar Column */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-gray-50 p-6 rounded-3xl border-2 border-gray-100 w-full flex justify-center">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={es}
                    disabled={[{ before: startOfToday() }]}
                    className="font-sans text-[#673AB7]"
                    classNames={{
                      day_selected: "bg-[#673AB7] text-white font-bold rounded-lg shadow-sm",
                      day_today: "font-black text-[#673AB7] underline decoration-pink-400 decoration-2",
                      button: "hover:bg-pink-100 rounded-lg w-10 h-10 transition-colors font-bold",
                      caption: "flex justify-center py-2 mb-4 relative items-center text-xl font-black text-[#673AB7]",
                      head_cell: "text-[#673AB7]/60 font-black uppercase text-[10px] pb-4",
                      day: "p-2 text-sm",
                    }}
                  />
                </div>
              </div>

              {/* Form Column */}
              <div className="flex flex-col justify-center">
                <form onSubmit={handleBooking} className="space-y-6">
                  
                  {/* Time Selection */}
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase text-[#673AB7]/60 ml-2 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-pink-500" /> Turnos Disponibles
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['10:00 - 13:00', '14:00 - 17:00', '18:00 - 21:00'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl border-2 text-center text-xs font-bold transition-all ${
                            selectedTime === time 
                              ? 'border-transparent bg-green-50 text-green-700 shadow-sm' 
                              : 'border-gray-100 bg-gray-50 text-[#673AB7] opacity-60 hover:opacity-100'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 pt-4 border-t-2 border-gray-100 mt-4">
                    <div>
                      <label className="block text-xs font-black uppercase text-[#673AB7]/60 ml-2 mb-2">Nombre del cumpleañero/a</label>
                      <input 
                        required
                        type="text" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ej: Sofía (cumple 5)"
                        className="w-full bg-gray-50 p-4 rounded-2xl border-2 border-gray-100 focus:border-[#673AB7] focus:ring-0 outline-none transition-all font-bold text-[#673AB7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-[#673AB7]/60 ml-2 mb-2">Tu teléfono</label>
                      <input 
                        required
                        type="tel" 
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Para contactarte (Ej: 0221...)"
                        className="w-full bg-gray-50 p-4 rounded-2xl border-2 border-gray-100 focus:border-[#673AB7] focus:ring-0 outline-none transition-all font-bold text-[#673AB7]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full py-4 rounded-3xl font-black text-sm uppercase transition-all duration-300 mt-4 ${
                      !selectedDate || !selectedTime
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#673AB7] text-white shadow-[0_6px_0_0_#4527A0] active:translate-y-[2px] active:shadow-[0_4px_0_0_#4527A0]'
                    }`}
                  >
                    {!selectedDate ? 'Elige una fecha' : !selectedTime ? 'Elige un horario' : 'Solicitar Reserva'}
                  </button>
                </form>
              </div>
            </div>
          )}
          <p className='text-[10px] text-center text-[#673AB7]/50 font-bold mt-6'>*Sujeto a confirmación vía WhatsApp</p>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 px-4 relative z-10 max-w-7xl mx-auto" id="contacto">
        <div className="text-center mb-12">
          <span className="bg-[#FFEB3B] px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block text-[#673AB7] shadow-sm">UBICACIÓN Y CONTACTO</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#673AB7] mb-4">¿Dónde estamos?</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-[50px] p-6 md:p-8 border-4 border-dashed border-[#673AB7]/20 shadow-xl">
          {/* Map */}
          <div className="h-[350px] lg:h-[450px] w-full rounded-[40px] overflow-hidden border-4 border-white shadow-lg bg-gray-100 relative">
            <iframe 
              src="https://maps.google.com/maps?q=Calle+54+632,+La+Plata,+Argentina,+1900&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <a href="tel:02216204716" className="flex items-center gap-4 bg-pink-100 p-6 rounded-[30px] border-4 border-pink-200 hover:scale-[1.02] active:scale-95 transition-transform group">
              <div className="bg-pink-500 text-white p-4 rounded-2xl rotate-[-3deg] group-hover:rotate-0 transition-transform"><Phone className="w-8 h-8"/></div>
              <div>
                <p className="text-xs font-black text-pink-500 uppercase tracking-wider">Llámanos</p>
                <p className="text-2xl md:text-3xl font-black text-[#673AB7]">0221 620-4716</p>
              </div>
            </a>
            <a href="mailto:multieventosmagic@gmail.com" className="flex items-center gap-4 bg-yellow-100 p-6 rounded-[30px] border-4 border-yellow-200 hover:scale-[1.02] active:scale-95 transition-transform group">
              <div className="bg-[#FBC02D] text-white p-4 rounded-2xl rotate-[3deg] group-hover:rotate-0 transition-transform"><Mail className="w-8 h-8"/></div>
              <div className="min-w-0">
                <p className="text-xs font-black text-yellow-600 uppercase tracking-wider">Escribinos</p>
                <p className="text-lg md:text-2xl font-black text-[#673AB7] truncate">multieventosmagic@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-blue-100 p-6 rounded-[30px] border-4 border-blue-200">
              <div className="bg-blue-500 text-white p-4 rounded-2xl rotate-[-3deg]"><MapPin className="w-8 h-8"/></div>
              <div>
                <p className="text-xs font-black text-blue-600 uppercase tracking-wider">Visitanos</p>
                <p className="text-xl md:text-2xl font-black text-[#673AB7] leading-tight">Calle 54 nro 632<br/><span className="text-sm">La Plata, Argentina (1900)</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5492216204716?text=Hola!%20Me%20gustar%C3%ADa%20conocer%20las%20propuestas%20y%20generar%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_6px_15px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-transform flex items-center justify-center border-4 border-white group"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 group-hover:animate-pulse">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="mt-12 mb-8 flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-tighter opacity-70 px-8 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-center md:text-left mb-4 md:mb-0">
          <span>© {new Date().getFullYear()} Magic Multi Eventos</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>Síguenos en</span>
          <div className="w-6 h-6 bg-pink-500 rounded-lg border border-white flex items-center justify-center text-white text-[10px]">IG</div>
          <div className="w-6 h-6 bg-blue-500 rounded-lg border border-white flex items-center justify-center text-white text-[10px]">FB</div>
        </div>
      </footer>
    </div>
  );
}

