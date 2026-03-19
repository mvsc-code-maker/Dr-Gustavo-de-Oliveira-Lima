import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Star, 
  Activity, 
  HeartPulse, 
  Dumbbell, 
  Apple, 
  ShieldCheck, 
  Clock, 
  Users, 
  ChevronRight, 
  Stethoscope,
  BatteryWarning,
  Scale,
  BrainCircuit,
  TrendingDown,
  Instagram,
  MapPin,
  ChevronDown
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511914173972";

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ServiceCard: React.FC<{ service: any, index: number }> = ({ service, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <div 
        className="group relative h-full p-8 rounded-2xl bg-dark-card border border-gold/20 hover:border-gold/60 transition-all duration-500 overflow-hidden shadow-[0_0_0_rgba(201,168,76,0)] hover:shadow-[0_0_30px_rgba(201,168,76,0.1)] cursor-pointer flex flex-col"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-bl-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
        
        <service.icon className="text-gold mb-6 relative z-10" size={36} strokeWidth={1.5} />
        
        <div className="flex items-center justify-between relative z-10">
          <h3 className="text-2xl font-serif text-white pr-4">{service.title}</h3>
          <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-dark border border-gold/30 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-gold/10' : ''}`}>
            <ChevronDown className="text-gold" size={20} />
          </div>
        </div>
        
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden relative z-10"
        >
          <div className="pt-6">
            <p className="text-text-muted text-base leading-relaxed font-light mb-6">{service.desc}</p>
            <a 
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta para a especialidade: ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-dark bg-gold hover:bg-gold-light px-6 py-3 rounded-full transition-colors shadow-[0_0_15px_rgba(201,168,76,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <MessageCircle size={18} />
              Agendar para esta especialidade
            </a>
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-text-light selection:bg-gold/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col text-left group"
          >
            <span className="font-serif font-semibold text-lg leading-tight tracking-wide group-hover:text-gold transition-colors">Dr. Gustavo Oliveira Lima</span>
            <span className="text-[10px] text-gold uppercase tracking-widest">Nutrologia & Endocrinologia</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2664&auto=format&fit=crop" 
            alt="Clinic Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-gold/30 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-8 bg-gold/5 backdrop-blur-sm">
              Atendimento Premium em São Paulo
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] mb-6 max-w-5xl mx-auto">
              Medicina de Precisão para sua <span className="text-gold italic">Longevidade</span> e Performance
            </h1>
            <p className="text-lg sm:text-xl text-text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Abordagem integrada em Nutrologia e Endocrinologia para transformar sua saúde, corpo e qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-dark px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] hover:-translate-y-1"
              >
                Agende sua Consulta
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-white/5 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <FadeIn delay={0.1} className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Users className="text-gold mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-serif text-4xl text-white mb-2">1,500+</h3>
              <p className="text-sm text-text-muted uppercase tracking-wider font-medium">Pacientes Satisfeitos</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col items-center text-center pt-8 md:pt-0">
              <Clock className="text-gold mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-serif text-4xl text-white mb-2">10+ Anos</h3>
              <p className="text-sm text-text-muted uppercase tracking-wider font-medium">De Experiência Clínica</p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col items-center text-center pt-8 md:pt-0">
              <ShieldCheck className="text-gold mb-4" size={36} strokeWidth={1.5} />
              <h3 className="font-serif text-4xl text-white mb-2">CRM 207.928</h3>
              <p className="text-sm text-text-muted uppercase tracking-wider font-medium">Clínica Premium</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl mb-6">Você se identifica com algum destes <span className="text-gold italic">sintomas?</span></h2>
              <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">A medicina tradicional muitas vezes trata apenas os sintomas. Nossa abordagem busca a raiz do problema para resultados definitivos.</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {[
              { icon: Scale, title: "Dificuldade para Emagrecer", desc: "Mesmo com dietas restritivas e exercícios regulares, o peso na balança não diminui." },
              { icon: BatteryWarning, title: "Cansaço Crônico", desc: "Falta de energia constante, fadiga ao longo do dia e dificuldade para acordar." },
              { icon: Activity, title: "Desequilíbrios Hormonais", desc: "Sintomas de menopausa, andropausa, queda de libido ou alterações na tireoide." },
              { icon: TrendingDown, title: "Perda de Massa Muscular", desc: "Dificuldade em ganhar ou manter músculos com o avanço da idade." },
              { icon: BrainCircuit, title: "Ansiedade Alimentar", desc: "Compulsão por doces e dificuldade em manter uma relação saudável com a comida." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`bg-dark-card border border-dark-border p-10 rounded-2xl hover:border-gold/30 transition-colors duration-500 group ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="w-14 h-14 bg-gold/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors duration-500">
                  <item.icon className="text-gold" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-white">{item.title}</h3>
                <p className="text-text-muted text-base leading-relaxed font-light">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Steps */}
      <section className="py-32 bg-dark-card/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-24">
              <h2 className="font-serif text-3xl md:text-5xl mb-6">O Protocolo <span className="text-gold italic">Exclusivo</span></h2>
              <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">Um método estruturado para mapear sua saúde e construir resultados duradouros e reais.</p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-dark-border z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative z-10">
              {[
                { step: "01", title: "Mapeamento", desc: "Consulta detalhada de 1h30 para entender seu histórico, rotina e objetivos." },
                { step: "02", title: "Investigação", desc: "Solicitação de exames laboratoriais de alta precisão e bioimpedância." },
                { step: "03", title: "Estratégia", desc: "Plano alimentar, suplementação e modulação hormonal totalmente individualizados." },
                { step: "04", title: "Evolução", desc: "Acompanhamento próximo com a equipe para ajustes e garantia de resultados." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.15} className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-dark border border-gold/50 flex items-center justify-center font-serif text-2xl text-gold mb-8 shadow-[0_0_20px_rgba(201,168,76,0.15)] relative">
                    <div className="absolute inset-1 border border-gold/20 rounded-full"></div>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-white">{item.title}</h3>
                  <p className="text-text-muted text-base font-light leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-5xl mb-6">Áreas de <span className="text-gold italic">Atuação</span></h2>
                <p className="text-text-muted text-lg font-light">Tratamentos baseados nas evidências científicas mais recentes, focados na otimização completa do seu corpo.</p>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors text-lg">
                Agendar Avaliação <ChevronRight size={20} />
              </a>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Emagrecimento Saudável", icon: Apple, desc: "Estratégias metabólicas para perda de gordura sustentável, preservando a massa magra e sem efeito sanfona." },
              { title: "Reposição Hormonal", icon: Activity, desc: "Equilíbrio hormonal para homens e mulheres, resgatando vitalidade, libido e bem-estar geral." },
              { title: "Hipertrofia e Performance", icon: Dumbbell, desc: "Otimização para ganho de massa magra, força e melhora do rendimento esportivo e recuperação." },
              { title: "Longevidade e Prevenção", icon: HeartPulse, desc: "Prevenção de doenças relacionadas à idade, otimização celular e aumento da qualidade de vida." },
              { title: "Tratamento de Diabetes", icon: Stethoscope, desc: "Controle metabólico avançado para diabetes, resistência à insulina e síndrome metabólica." },
              { title: "Controle de Colesterol", icon: ShieldCheck, desc: "Ajuste fino das funções tireoidianas e perfil lipídico para saúde cardiovascular ótima." }
            ].map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="py-32 bg-dark-card/50 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <FadeIn className="w-full lg:w-1/2">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 border border-gold/40 rounded-2xl translate-x-6 translate-y-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2664&auto=format&fit=crop" 
                  alt="Dr. Gustavo Lima" 
                  className="relative z-10 rounded-2xl w-full h-[600px] object-cover grayscale-[30%] contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20 bg-dark/90 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                  <p className="font-serif text-gold text-2xl mb-1">Dr. Gustavo de Oliveira Lima</p>
                  <p className="text-sm text-text-muted uppercase tracking-wider">Nutrologia & Endocrinologia</p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-white font-medium">CRM/SP 207.928</span>
                    <span className="text-gold text-sm">São Paulo, SP</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.2}>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.1]">Sua saúde tratada como <span className="text-gold italic">obra de arte.</span></h2>
                <div className="space-y-6 text-text-muted font-light text-lg leading-relaxed">
                  <p>
                    Sou médico especialista em Nutrologia e Endocrinologia, dedicado a transformar a vida de pacientes que buscam mais do que apenas a ausência de doenças. Meu foco é a otimização da sua máquina humana.
                  </p>
                  <p>
                    Com vasta experiência clínica em São Paulo, desenvolvi um método que une a precisão dos exames mais avançados com um olhar humano e individualizado para cada paciente.
                  </p>
                  <p>
                    Acredito que o emagrecimento, a hipertrofia e a longevidade são consequências de um corpo metabolicamente equilibrado. Não prescrevo dietas de gaveta; construo estratégias de vida para resultados definitivos.
                  </p>
                </div>
                <div className="mt-12">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark px-10 py-4 rounded-full font-medium text-lg transition-all duration-300"
                  >
                    Agendar Avaliação
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-3xl md:text-5xl mb-6">Histórias de <span className="text-gold italic">Transformação</span></h2>
              <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">O que dizem os pacientes que já vivenciaram o nosso protocolo exclusivo.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mariana S.", result: "-15kg e energia renovada", text: "Depois de anos lutando contra a balança e o cansaço, o Dr. Gustavo descobriu um desequilíbrio na minha tireoide. O tratamento mudou minha vida, recuperei minha autoestima e disposição." },
              { name: "Roberto M.", result: "Hipertrofia e Performance", text: "Como empresário, minha rotina é insana. O protocolo de reposição hormonal e ajuste nutricional me deu o foco e a energia que eu tinha aos 20 anos. O ganho de massa foi consequência." },
              { name: "Ana Paula F.", result: "Controle da Menopausa", text: "O atendimento é impecável. A clínica é linda e o Dr. Gustavo tem uma escuta ativa rara hoje em dia. Os implantes hormonais devolveram minha qualidade de vida e sono." }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.15} className="bg-dark-card p-10 rounded-2xl border border-dark-border relative flex flex-col h-full">
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-gold fill-gold" size={18} />
                  ))}
                </div>
                <p className="text-text-muted italic mb-10 leading-relaxed font-light text-lg flex-grow">"{testimonial.text}"</p>
                <div className="mt-auto border-t border-white/5 pt-6">
                  <p className="font-serif text-white text-xl mb-1">{testimonial.name}</p>
                  <p className="text-gold text-sm font-medium">{testimonial.result}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15)_0%,transparent_60%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 text-white leading-[1.1]">Pronto para assumir o controle da sua <span className="text-gold italic">saúde?</span></h2>
            <p className="text-xl text-text-muted mb-12 font-light max-w-2xl mx-auto">
              Dê o primeiro passo rumo à sua melhor versão. Nossa equipe de concierge está pronta para agendar sua avaliação.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-12 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] hover:-translate-y-1"
            >
              <MessageCircle size={28} />
              Falar com Concierge no WhatsApp
            </a>
            <p className="mt-8 text-sm text-text-muted tracking-wide uppercase">Atendimento exclusivo em São Paulo, SP.</p>
          </FadeIn>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-dark-card/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl mb-6">Nossa <span className="text-gold italic">Localização</span></h2>
              <p className="text-text-muted text-lg font-light flex items-center justify-center gap-2">
                <MapPin size={20} className="text-gold" />
                Av. Ibirapuera, 2120 - cj. 201 - Indianópolis, São Paulo - SP, 04029-000
              </p>
            </div>
            <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <iframe 
                src="https://maps.google.com/maps?q=Av.+Ibirapuera,+2120+-+cj.+201+-+Indianópolis,+São+Paulo+-+SP,+04029-000&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Info */}
            <div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-serif font-semibold text-white tracking-wide text-xl mb-4 block hover:text-gold transition-colors text-left"
              >
                Dr. Gustavo Oliveira Lima
              </button>
              <p className="text-sm text-text-muted font-light mb-2">Nutrologia & Endocrinologia</p>
              <p className="text-sm text-text-muted font-light mb-6">CRM/SP 207.928</p>
              <p className="text-sm text-text-muted font-light">
                Av. Ibirapuera, 2120 - cj. 201<br />
                Indianópolis, São Paulo - SP<br />
                04029-000
              </p>
            </div>
            
            {/* Hours */}
            <div>
              <h4 className="text-gold font-serif text-lg mb-4">Horário de Atendimento</h4>
              <ul className="space-y-2 text-sm text-text-muted font-light max-w-[250px]">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-white">08:00 às 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-white">08:00 às 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-gold">Fechado</span>
                </li>
              </ul>
            </div>
            
            {/* Contact & Social */}
            <div>
              <h4 className="text-gold font-serif text-lg mb-4">Contato & Redes</h4>
              <div className="space-y-4">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-whatsapp transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://www.instagram.com/drgustavo.oliveiralima?igsh=MWE0dmNsNGVoaTd2cQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-text-muted/50 font-light">
            &copy; {new Date().getFullYear()} Dr. Gustavo Oliveira Lima. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] bg-whatsapp text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
