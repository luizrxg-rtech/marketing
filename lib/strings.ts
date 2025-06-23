const globals = {
  appName: "RTech",
  instagramUrl: "https://www.instagram.com/rtech_solution",
  linkedinUrl: "https://www.linkedin.com/company/r-techsolution",
  chatlogUrl: "https://chatlog.rtechsolution.com.br/",
  email: "contato@rtechsolution.com.br",
  phone: "(34) 99681-7814",
  phonePlain: "+5534996817814",
  location: "Uberlândia, MG",
}

export const strings = {
  pt: {
    globals: globals,

    nav: {
      home: "Início",
      companies: "Marcas",
      cases: "Cases",
      method: "Método",
      faq: "FAQ",
    },


    hero: {
      title: "Somos a solução de",
      subtitle: "performance em",
      words: [
        "Marketing Digital",
        "Vendas",
        "Inteligência de dados"
      ],
      highlight: "Vendas",
      description: "para sua marca",
      cta: "Fale Conosco"
    },


    companies: {
      title: "Empresas que",
      highlight: "confiam em nós"
    },


    mission: {
      title: "Nossa missão é conduzir marcas autênticas ao crescimento.",
      description: "Desenvolvemos estratégias personalizadas que impulsionam o crescimento sustentável de marcas que querem deixar sua marca no mundo.",
      subtitle: "Podemos cada passo da nossa jornada em estratégias de dados e somos fanáticos pela experiência do nosso público.",
      cta: "Fale com a Estratégia"
    },


    cases: {
      title: "Conheça nossos",
      highlight: "cases de sucesso.",
      description: "Grandes marcas que aceleraram seu processo de crescimento com a " + globals.appName + ". Veja os resultados:",
      items: [
        {
          title: "Crescimento E-commerce",
          company: "TechStore",
          description: "Aumentamos as vendas online em 300% em 6 meses através de marketing digital estratégico."
        },
        {
          title: "Transformação de Marca",
          company: "Fashion Co",
          description: "Redesign completo da marca que resultou em 250% de aumento no engajamento dos clientes."
        },
        {
          title: "Inovação Digital",
          company: "FinTech Pro",
          description: "Plataforma fintech revolucionária que conquistou 100K usuários no primeiro trimestre."
        },
        {
          title: "Liderança de Mercado",
          company: "FoodChain",
          description: "Estabelecemos liderança de mercado em delivery de comida com experiência inovadora."
        },
        {
          title: "Expansão Global",
          company: "StartupX",
          description: "Escalamos de startup local para presença global com campanhas estratégicas de crescimento."
        },
        {
          title: "Disrupção da Indústria",
          company: "InnovaCorp",
          description: "Disrumpimos indústria tradicional com soluções digitais de ponta."
        }
      ],
      metrics: {
        growth: "Crescimento",
        users: "Usuários",
        rating: "Avaliação"
      }
    },


    method: {
      title: {
        first: "Método",
        second: globals.appName,
      },
      description: "A " + globals.appName + " planeja e executa toda a jornada da sua empresa pelo digital.",
      steps: {
        startup: {
          title: "START UP",
          description: "Definimos estratégias baseadas em dados precisos e criamos fundações sólidas para o crescimento digital sustentável."
        },
        data: {
          title: "DADOS",
          description: "Coletamos e analisamos métricas essenciais para otimizar cada aspecto da sua presença digital."
        },
        growth: {
          title: "CRESCIMENTO",
          description: "Implementamos estratégias escaláveis que geram resultados mensuráveis e crescimento consistente."
        }
      },
      cta: "Fale Conosco"
    },


    faq: {
      title: "Perguntas frequentes",
      subtitle: "Sobre algumas dúvidas sobre como o Método " + globals.appName + " pode transformar seus resultados no digital.",
      questions: [
        {
          question: "Como funciona o processo de trabalho da " + globals.appName + " ?",
          answer: "Nosso processo é dividido em 3 etapas principais: StartUp (estratégia e fundação), Dados (análise e otimização) e Crescimento (implementação e escala). Cada etapa é personalizada para suas necessidades específicas."
        },
        {
          question: "Quanto tempo leva para ver os primeiros resultados?",
          answer: "Os primeiros resultados começam a aparecer entre 30 a 60 dias, dependendo do projeto. Nosso foco é em crescimento sustentável e consistente."
        },
        {
          question: "Vocês trabalham com que tipo de empresa?",
          answer: "Trabalhamos com empresas de todos os portes, desde startups até grandes corporações, que buscam crescimento digital sustentável e baseado em dados."
        },
        {
          question: "Como é feito o acompanhamento dos resultados?",
          answer: "Fornecemos relatórios detalhados mensais com todas as métricas importantes, além de reuniões de alinhamento para discutir estratégias e próximos passos."
        }
      ],
      contact: "Entre em contato conosco"
    },
    footer: {
      description: "Transformando marcas através de estratégias digitais baseadas em dados.",
      rights: "Todos os direitos reservados.",
      poweredBy: "Powered by Data"
    }
  },


  en: {
    globals: globals,

    nav: {
      home: "Home",
      companies: "companies",
      cases: "Cases",
      method: "Method",
      faq: "FAQ",
    },


    hero: {
      title: "We are the solution for",
      subtitle: "performance in",
      words: [
        "Digital Marketing",
        "Sales",
        "Data Intelligence",
      ],
      highlight: "Sales",
      description: "for your brand",
      cta: "Contact Us"
    },


    companies: {
      title: "Companies that",
      highlight: "trust us"
    },


    mission: {
      title: "Our mission is to drive authentic brands to growth.",
      description: "We develop personalized strategies that drive sustainable growth for brands that want to leave their mark on the world.",
      subtitle: "We can trace every step of our journey in data strategies and we are fanatics about our audience experience.",
      cta: "Talk to Strategy"
    },


    cases: {
      title: "Meet our",
      highlight: "success cases.",
      description: "Great brands that accelerated their growth process with " + globals.appName + ". See the results:",
      items: [
        {
          title: "E-commerce Growth",
          company: "TechStore",
          description: "Increased online sales by 300% in 6 months through strategic digital marketing."
        },
        {
          title: "Brand Transformation",
          company: "Fashion Co",
          description: "Complete brand redesign that resulted in 250% increase in customer engagement."
        },
        {
          title: "Digital Innovation",
          company: "FinTech Pro",
          description: "Revolutionary fintech platform that gained 100K users in the first quarter."
        },
        {
          title: "Market Leadership",
          company: "FoodChain",
          description: "Established market leadership in food delivery with innovative user experience."
        },
        {
          title: "Global Expansion",
          company: "StartupX",
          description: "Scaled from local startup to global presence with strategic growth campaigns."
        },
        {
          title: "Industry Disruption",
          company: "InnovaCorp",
          description: "Disrupted traditional industry with cutting-edge digital solutions."
        }
      ],
      metrics: {
        growth: "Growth",
        users: "Users",
        rating: "Rating"
      }
    },


    method: {
      title: {
        first: globals.appName,
        second: "Method",
      },
      description: globals.appName + " plans and executes your entire company journey through digital.",
      steps: {
        startup: {
          title: "START UP",
          description: "We define strategies based on precise data and create solid foundations for sustainable digital growth."
        },
        data: {
          title: "DATA",
          description: "We collect and analyze essential metrics to optimize every aspect of your digital presence."
        },
        growth: {
          title: "GROWTH",
          description: "We implement scalable strategies that generate measurable results and consistent growth."
        }
      },
      cta: "Contact Us"
    },


    faq: {
      title: "Frequently asked questions",
      subtitle: "About some questions about how the " + globals.appName + " Method can transform your digital results.",
      questions: [
        {
          question: "How does " + globals.appName + "'s work process work?",
          answer: "Our process is divided into 3 main stages: StartUp (strategy and foundation), Data (analysis and optimization) and Growth (implementation and scale). Each stage is customized to your specific needs."
        },
        {
          question: "How long does it take to see the first results?",
          answer: "The first results start to appear between 30 to 60 days, depending on the project. Our focus is on sustainable and consistent growth."
        },
        {
          question: "What type of company do you work with?",
          answer: "We work with companies of all sizes, from startups to large corporations, that seek sustainable digital growth based on data."
        },
        {
          question: "How is the monitoring of results done?",
          answer: "We provide detailed monthly reports with all important metrics, plus alignment meetings to discuss strategies and next steps."
        }
      ],
      contact: "Contact us"
    },


    footer: {
      description: "Transforming brands through data-driven digital strategies.",
      rights: "All rights reserved.",
      poweredBy: "Powered by Data"
    }
  }
};