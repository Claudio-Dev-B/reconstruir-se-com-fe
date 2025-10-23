import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Heart, Sparkles, Shield, Gift, Award, Clock, BookOpen, Video, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/Prancheta-1-2.webp";
import elienePortrait from "@/assets/eliene.webp";
import jornada from "@/assets/ainda_e_tempo.webp";
import eliene from "@/assets/eliene.webp"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

const [showModules, setShowModules] = useState(false);

  const modules = [
    
    {
      number: "01",
      title: "Aliança e Identidade",
      description: "Descubra quem você é em Deus. Refaça sua aliança espiritual e desperte a mulher que Ele te chamou para ser."
    },
    {
      number: "02",
      title: "Perdão",
      description: "Liberte o passado. Encerre ciclos de dor e entenda o poder libertador do perdão verdadeiro."
    },
    {
      number: "03",
      title: "Reconstrução",
      description: "Aprenda a reconstruir sua vida emocional e espiritual com base em pilares firmes: fé, propósito e autocompaixão."
    },
    {
      number: "04",
      title: "Tempo de Espera",
      description: "Encontre descanso no processo. Transforme a espera em fortalecimento e confiança no tempo perfeito de Deus."
    },
    {
      number: "05",
      title: "Posicionamento",
      description: "Descubra como se colocar no centro da sua própria vida, com limites saudáveis e sabedoria emocional."
    },
    {
      number: "06",
      title: "Autogoverno",
      description: "Domine suas emoções e decisões. Desenvolva clareza mental e espiritual para guiar sua jornada com propósito."
    },
    {
      number: "07",
      title: "Sexo e Desligamento de Alma",
      description: "Restaure sua pureza emocional. Feche portas espirituais do passado e viva uma nova fase de liberdade interior."
    },
    {
      number: "08",
      title: "Mulher Virtuosa",
      description: "Compreenda o verdadeiro significado da virtude. Seja forte, sensível e plena na sua essência feminina."
    },
    {
      number: "09",
      title: "Princípios do Casamento",
      description: "Entenda o amor como extensão da sua cura. Descubra como relacionar-se de forma saudável — inclusive consigo mesma."
    },
    {
      number: "10",
      title: "Vida Espiritual na Prática",
      description: "Transforme fé em ação. Leve a presença de Deus para as decisões, rotinas e desafios do seu dia a dia."
    },
    {
      number: "11",
      title: "Propósito",
      description: "Encontre direção. Alinhe seus dons e talentos ao propósito que Deus reservou para sua vida."
    },
    {
      number: "12",
      title: "Transformação e Continuidade",
      description: "Celebre o novo tempo. Aprenda a manter sua fé, sua força e sua essência em constante evolução."
    }
  ];

  const benefits = [
    "Clareza sobre quem você é em Deus",
    "Liberdade emocional e perdão verdadeiro",
    "Confiança e amor próprio restaurados",
    "Conexão espiritual profunda e prática",
    "Uma vida leve, equilibrada e intencional"
  ];

  const bonuses = [
    {
      title: "Mapa da Cura Emocional",
      description: "Guia prático com exercícios para aplicar em cada módulo."
    },
    {
      title: "Duas calls ao vivo com Eliene Marçal",
      description: "Mentoria em grupo com ministrações e direcionamentos pessoais."
    },
    {
      title: "Acesso vitalício",
      description: "Você pode revisitar o conteúdo sempre que precisar."
    }
  ];

  return (
    <div className="min-h-screen">

{/* Hero Section */}
<section className="relative min-h-screen bg-dark-bg text-white mb-10 md:mb-20 overflow-hidden">

  {/* Fundo Desktop */}
  <div
    className="hidden md:block absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${heroImage})`,
    }}
  />

  {/* Fundo Mobile */}
  <div className="block md:hidden w-full relative">
    <img
      src={eliene}
      alt="Eliene Marçal"
      className="w-full h-auto object-cover"
    />
{/* Título sobre a imagem */}
<h1
  className="
    absolute left-1/2 -translate-x-1/2 bottom-4
    font-bold text-center text-primary leading-tight tracking-tight
    text-4xl
    w-[90%] max-w-xs
  "
>
  <span className="block">Ainda é Tempo de</span>
  <span className="block">se Reconstruir</span>
</h1>

</div>

  {/* Conteúdo */}
  <div className="relative container mx-auto px-4 py-10 md:py-32 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start z-10">

    {/* Bloco de texto */}
    <div className="w-full md:w-1/2 text-center md:text-left max-w-3xl md:max-w-xl">

     {/* Título Desktop */}
<h1 className="hidden md:block text-7xl font-bold mb-6 leading-tight text-white text-left w-max">
  <span className="block">Ainda é Tempo de</span>
  <span className="block">se Reconstruir</span>
</h1>

      {/* Parágrafo principal com menos espaçamento */}
      <div className="text-lg md:text-xl leading-snug md:leading-relaxed mt-4 md:mt-0 mb-8 space-y-1">
        <p>
          Não é sobre encontrar alguém. É sobre se encontrar. Sobre curar as feridas que te afastaram de quem Deus te criou para ser.
          Talvez você tenha se acostumado a ser forte o tempo todo. A esconder a dor, a seguir sorrindo mesmo cansada.
        </p>
        <p className="font-semibold text-primary mt-4">
          Mas Deus não quer que você viva em pedaços!
          Ele quer te ver inteira, restaurada e livre.
        </p>
      </div>

      <Button
        size="lg"
        variant="hero"
        onClick={scrollToCTA}
        className="text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 h-auto w-[90%] sm:w-auto text-center whitespace-normal break-words leading-snug mx-auto md:mx-0"
      >
        Quero começar minha jornada de reconstrução
      </Button>
    </div>

    {/* Espaço reservado para imagem no desktop */}
    <div className="hidden md:block md:w-1/2" aria-hidden="true"></div>
  </div>
</section>


{/* Próxima Seção (Descrição do Curso) */}
<section className="relative z-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16 max-w-6xl mx-auto">
      
      {/* Imagem */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img 
          src={jornada} 
          alt="Jornada Ainda é Tempo" 
          className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left animate-slide-up bg-background p-6 md:p-0 rounded-lg md:rounded-none">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          O “Ainda é Tempo” é uma jornada de cura e reconstrução interior
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Um curso criado para mulheres que decidiram recomeçar — com fé, com propósito e com amor próprio.
          </p>
          <p>
            Aqui, você vai reencontrar sua identidade, restaurar sua autoestima e aprender a viver guiada pela presença de Deus, em todas as áreas da sua vida.
          </p>
          <p className="font-semibold text-foreground">
            São 12 módulos de transformação, com base bíblica e emocional, conduzidos por Eliene Marçal, mentora e líder espiritual que já ajudou milhares de mulheres a se levantarem novamente.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Essa jornada é para você */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Essa jornada é para você que…
            </h2>
            <div className="space-y-6">
              {[
                "Sente que perdeu um pouco de si mesma ao longo das lutas.",
                "Já carregou culpas, medos e decepções por tempo demais.",
                "Quer viver com mais leveza, segurança e fé.",
                "Deseja se reconstruir por dentro — antes de qualquer relacionamento, conquista ou plano."
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-sm animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
{/* Módulos do Curso */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          O que você vai viver dentro do curso
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Mais do que aulas, essa é uma experiência de renascimento.
          Cada módulo foi criado como uma etapa de um processo real de reconstrução,
          baseado em princípios bíblicos e ferramentas práticas para o dia a dia.
        </p>

        {/* Botão para expandir a lista */}
        <button
          onClick={() => setShowModules(!showModules)}
          className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-all"
        >
          Clique para conhecer os módulos
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              showModules ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
            {/* Lista de módulos (expansível) */}
      <div
        className={`transition-all duration-700 overflow-hidden ${
          showModules ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {modules.map((module, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-3xl font-bold text-primary font-serif flex-shrink-0">
                    {module.number}
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    {module.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2 pl-16 text-muted-foreground leading-relaxed">
                {module.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
</section>

      {/* Benefícios */}
<section className="py-20 bg-gradient-to-b from-primary/10 to-primary/5">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
        Você vai conquistar:
      </h2>
      <div className="space-y-4 text-left inline-block">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-lg animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0" />
            <p className="text-foreground font-medium">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Investimento - Destacado com neuromarketing */}
      <section id="cta-section" className="py-32 bg-gradient-to-b from-primary/20 via-primary/10 to-background relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(218,165,32,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(218,165,32,0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge de urgência */}
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-2 rounded-full text-sm font-semibold border-2 border-primary/30">
                <Sparkles className="w-4 h-4" />
                Bônus exclusivos para as 50 primeiras
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <Card className="p-8 md:p-12 text-center shadow-2xl border-2 border-primary/20 bg-gradient-to-b from-card to-card/80 backdrop-blur-sm animate-scale-in relative overflow-hidden">
              {/* Brilho decorativo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                  Investimento
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Comece sua transformação hoje
                </p>
                
                {/* Preço em destaque */}
                <div className="mb-10 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-6xl md:text-7xl font-bold text-primary mb-3 animate-pulse">
                    12x de R$ 40,34
                  </div>
                  <div className="text-2xl md:text-3xl text-foreground mb-2">
                    ou R$ 397 à vista
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mt-4">
                    <Shield className="w-4 h-4" />
                    Garantia de 7 dias - Risco zero
                  </div>
                </div>

                {/* Tudo que você terá */}
                <div className="mb-10 bg-background/50 rounded-2xl p-8 border border-primary/10">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Tudo que você terá com o curso
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Mais de 12 módulos completos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Mais de 65 aulas gravadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Metodologia bíblica</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Materiais Complementares</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Acesso por 1 ano</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Aulas com Eliene Marçal</span>
                    </div>
                  </div>
                </div>

                {/* CTA Principal */}
<Button
  size="lg"
  variant="hero"
  onClick={scrollToCTA}
  className="text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 h-auto w-[90%] sm:w-auto text-center whitespace-normal break-words leading-snug"
>
  Quero começar minha jornada de reconstrução
</Button>


        {/* Trust badges */}
          <div
           className="
           flex flex-wrap items-center justify-center 
           gap-3 sm:gap-6 
           text-sm text-muted-foreground 
            mt-6 sm:mt-8
         "
>
       <div className="flex items-center gap-2">
         <Shield className="w-5 h-5 text-primary" />
           <span>Compra 100% segura</span>
              </div>
               <div className="flex items-center gap-2">
                 <Clock className="w-5 h-5 text-primary" />
                  <span>Acesso imediato</span>
                  </div>
                   <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 text-primary" />
                   <span>Certificado de conclusão</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos - Reposicionados após investimento (prova social) */}
      <section className="py-20 bg-beige/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              Depoimentos Reais
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-16">
              Veja o que outras mulheres conquistaram nessa jornada
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card relative animate-slide-up hover:shadow-xl transition-shadow duration-300">
                <Sparkles className="w-12 h-12 text-primary mb-6 opacity-20 absolute top-4 right-4" />
                <p className="text-lg mb-6 text-foreground italic leading-relaxed">
                  "Eu me reconstruí de dentro pra fora. Não é só sobre relacionamento — é sobre reencontrar minha paz."
                </p>
                <p className="font-semibold text-muted-foreground">— Fernanda, 38 anos</p>
              </Card>
              
              <Card className="p-8 bg-card relative animate-slide-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '0.1s' }}>
                <Sparkles className="w-12 h-12 text-primary mb-6 opacity-20 absolute top-4 right-4" />
                <p className="text-lg mb-6 text-foreground italic leading-relaxed">
                  "Descobri que minha fé podia ser minha força. Hoje eu vivo em paz, inteira, curada."
                </p>
                <p className="font-semibold text-muted-foreground">— Patrícia, 41 anos</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Bônus Exclusivos
              </h2>
              <p className="text-xl text-primary font-semibold">Para as 50 primeiras</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {bonuses.map((bonus, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Gift className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-primary">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bonus.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Eliene Marçal */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              Quem é Eliene Marçal
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Conheça a mentora que vai guiar sua jornada de reconstrução
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 flex justify-center animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                  <img 
                    src={eliene} 
                    alt="Eliene Marçal"
                    className="relative rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-primary/20"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4 text-base text-foreground leading-relaxed animate-slide-up">
                <p>
                  Eliene Marçal é fundadora e líder do Ministério Gerando Vidas nas Nações, iniciado em 2016 em Goiânia/GO. Seu encontro com Jesus aos 16 anos transformou sua vida e a levou a buscar sabedoria na Palavra, tornando-se referência em aconselhamento para mulheres.
                </p>
                <p>
                  Após viver um casamento abusivo, enfrentar divórcio, criar duas filhas sozinha e superar lutas financeiras e emocionais, Eliene aprendeu a se posicionar como edificadora do lar e hoje compartilha seus aprendizados para fortalecer outras famílias.
                </p>
                <p>
                  Com mais de 30 anos de caminhada no evangelho, participou de seminários e conferências com nomes como Dave Roberson, Mike Murdock e John C. Maxwell, além de atuar como Conselheira e Intercessora no Ministério SILC de 2017 a 2023.
                </p>
                <p>
                  Em 2019, após 20 anos de espera em Deus, viveu um recomeço ao se casar com Edson Luís Vachiano Filho. Hoje, como Apóstola, testemunha que independente do passado, Deus sempre tem um lugar de restituição e recomeço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ainda é Tempo de ser quem Deus te chamou para ser
            </h2>
            <div className="space-y-3 text-xl mb-10 text-muted-foreground">
              <p>Não é tarde demais.</p>
              <p>Não importa o que aconteceu, você pode se reconstruir — inteira, livre e amada.</p>
            </div>
<Button
  size="lg"
  variant="hero"
  onClick={scrollToCTA}
  className="text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 h-auto w-[90%] sm:w-auto text-center whitespace-normal break-words leading-snug"
>
  Quero começar minha jornada de reconstrução
</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark-bg text-white/80 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2025 Ainda é Tempo - Eliene Marçal. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
