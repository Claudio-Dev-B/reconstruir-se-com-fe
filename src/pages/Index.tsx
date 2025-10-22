import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Heart, Sparkles, Shield, Gift } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import elienePortrait from "@/assets/eliene-portrait.jpg";

const Index = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
      <section 
        className="relative min-h-screen flex items-center justify-center bg-dark-bg text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Ainda é Tempo de se Reconstruir
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl leading-relaxed mb-8">
            <p>Não é sobre encontrar alguém.</p>
            <p>É sobre se encontrar.</p>
            <p>Sobre curar as feridas que te afastaram de quem Deus te criou para ser.</p>
            <p className="pt-4">Talvez você tenha se acostumado a ser forte o tempo todo.</p>
            <p>A esconder a dor, a seguir sorrindo mesmo cansada.</p>
            <p className="pt-4 font-semibold text-primary">Mas Deus não quer que você viva em pedaços —</p>
            <p className="font-semibold text-primary">Ele quer te ver inteira, restaurada e livre.</p>
          </div>
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToCTA}
            className="text-lg px-8 py-6 h-auto"
          >
            Quero começar minha jornada de reconstrução
          </Button>
        </div>
      </section>

      {/* Descrição do Curso */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                O "Ainda é Tempo" é uma jornada de cura e reconstrução interior
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                O que você vai viver dentro do curso
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Mais do que aulas, essa é uma experiência de renascimento.
                Cada módulo foi criado como uma etapa de um processo real de reconstrução,
                baseado em princípios bíblicos e ferramentas práticas para o dia a dia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-primary text-4xl font-bold mb-3 font-serif">
                    {module.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </Card>
              ))}
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
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-4 text-lg animate-slide-up"
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

      {/* Depoimentos */}
      <section className="py-20 bg-beige/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
              Depoimentos Reais
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card relative animate-slide-up">
                <Sparkles className="w-12 h-12 text-primary mb-6 opacity-20 absolute top-4 right-4" />
                <p className="text-lg mb-6 text-foreground italic leading-relaxed">
                  "Eu me reconstruí de dentro pra fora. Não é só sobre relacionamento — é sobre reencontrar minha paz."
                </p>
                <p className="font-semibold text-muted-foreground">— Fernanda, 38 anos</p>
              </Card>
              
              <Card className="p-8 bg-card relative animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
              <p className="text-xl text-primary font-semibold">para as 50 primeiras</p>
            </div>
            
            <div className="space-y-6">
              {bonuses.map((bonus, index) => (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <Gift className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {bonus.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section id="cta-section" className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-10 text-center shadow-xl animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Investimento
              </h2>
              
              <div className="mb-8">
                <div className="text-5xl font-bold text-primary mb-2">
                  12x de R$ 40,34
                </div>
                <div className="text-2xl text-muted-foreground mb-6">
                  ou R$ 397 à vista
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Acesso por 365 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Compra 100% segura</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Garantia de 7 dias
                </p>
              </div>

              <Button 
                size="lg" 
                variant="hero"
                className="w-full text-lg py-6 h-auto mb-4"
              >
                Quero começar minha jornada de reconstrução
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Eliene Marçal */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Quem é Eliene Marçal
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 flex justify-center animate-fade-in">
                <img 
                  src={elienePortrait} 
                  alt="Eliene Marçal"
                  className="rounded-full w-64 h-64 object-cover shadow-xl"
                />
              </div>
              
              <div className="md:col-span-2 space-y-4 text-lg text-foreground leading-relaxed animate-slide-up">
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
              className="text-lg px-8 py-6 h-auto"
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
