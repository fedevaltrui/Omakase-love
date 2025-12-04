"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InvitationContent() {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24">
      {/* Japanese decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-8 md:mb-12"
      >
        <div className="text-6xl md:text-8xl text-primary/20 font-serif select-none">桜</div>
      </motion.div>

      {/* Main title */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8 md:mb-12"
      >
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Estás cordialmente invitada a
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
          Una Cena
          <br />
          <span className="text-primary">Omakase</span> Privada
        </h1>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-24 md:w-32 h-px bg-primary/30 mb-8 md:mb-12"
      />

      {/* Personal message */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-lg md:max-w-xl text-center mb-12 md:mb-16"
      >
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Mi amor, estos dias fueron muy dificiles para mi y sin embargo siempre estuviste firme al lado mio, conteniendome y alentandome a mas, a veces me cuesta expresarme con palabras y se que estuve apagado. Por eso quiero expresar todo este amor y toda este sentimiento con lo que mejor me sale.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
           Prepare una experiencia <span className="text-primary font-medium">Omakase</span>, solo para nosotros.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">Sin celulares, sin distracciones, solo nosotros para re-<span className="text-primary font-medium">conectarnos</span></p>
      </motion.div>

      {/* Event details */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 w-full max-w-2xl"
      >
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
          <Calendar className="w-6 h-6 text-primary mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Fecha</p>
          <p className="font-serif text-lg text-foreground">Miercoles, 10 de diciembre</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
          <Clock className="w-6 h-6 text-primary mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Hora</p>
          <p className="font-serif text-lg text-foreground">21:00 hrs</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
          <MapPin className="w-6 h-6 text-primary mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Lugar</p>
          <p className="font-serif text-lg text-foreground">Nuestro Hogar</p>
        </div>
      </motion.div>

      {/* RSVP Button */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center"
      >
        {!isConfirmed ? (
          <Button
            onClick={() => setIsConfirmed(true)}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base tracking-wide transition-all duration-300 hover:scale-105"
          >
            Aceptar la Invitación
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-primary">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-serif text-xl">¡Gracias!</span>
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <p className="text-muted-foreground">Te espero con ansias para esta noche especial.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Chef signature */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 md:mt-24 text-center"
      >
        <p className="text-sm text-muted-foreground mb-2">Con todo mi amor,</p>
        <p className="font-serif text-2xl md:text-3xl text-foreground italic">Tu Chef</p>
      </motion.div>

      {/* Japanese decorative footer element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-12 text-4xl text-primary/10 select-none"
      >
        おまかせ
      </motion.div>
    </div>
  )
}
