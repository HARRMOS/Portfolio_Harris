import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [stagesRef, stagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0f1c]/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
              Harris.dev
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">À propos</a>
              <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Compétences</a>
              <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Projets</a>
              <a href="#stages" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Stages</a>
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                Mohammad Harris
              </span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8"
            >
              Étudiant en BTS SIO SLAM
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Passionné par le développement web et la création d'applications innovantes.
              Je transforme des idées en expériences numériques exceptionnelles.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Voir mes projets
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-[#4facfe] rounded-full font-medium hover:bg-[#4facfe]/10 transition-all"
              >
                Me contacter
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        ref={aboutRef}
        className="py-20 bg-[#0d1424]"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                À propos de moi
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-6">
                  Je suis actuellement étudiant en première année de BTS SIO (Services Informatiques aux Organisations) 
                  option SLAM (Solutions Logicielles et Applications Métiers) au lycée Parc de Vilgénis à Massy.
                </p>
                <p className="text-gray-300">
                  Ma passion pour le développement web m'a conduit à me spécialiser dans la création d'applications 
                  modernes et performantes, en utilisant les dernières technologies du marché.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#161f35] rounded-lg">
                  <h3 className="font-medium mb-2">Formation</h3>
                  <p className="text-gray-400">BTS SIO SLAM - Lycée Parc de Vilgénis</p>
                </div>
                <div className="p-4 bg-[#161f35] rounded-lg">
                  <h3 className="font-medium mb-2">Localisation</h3>
                  <p className="text-gray-400">Massy, Île-de-France</p>
                </div>
                <div className="p-4 bg-[#161f35] rounded-lg">
                  <h3 className="font-medium mb-2">Disponibilité</h3>
                  <p className="text-green-400">Disponible pour stage/alternance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react
      </section>

      {/* Skills Section */}
      <section 
        id="skills"
        ref={skillsRef}
        className="py-20 bg-[#0a0f1c]"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-6">Technologies</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>HTML/CSS</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-[#161f35] rounded-full">
                      <div className="h-full w-[90%] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-[#161f35] rounded-full">
                      <div className="h-full w-[85%] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>React</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-[#161f35] rounded-full">
                      <div className="h-full w-[80%] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>PHP</span>
                      <span>75%</span>
                    </div>
                    <div className="h-2 bg-[#161f35] rounded-full">
                      <div className="h-full w-[75%] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-6">Outils</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#161f35] rounded-lg text-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-12 h-12 mx-auto mb-2" />
                    <span>VS Code</span>
                  </div>
                  <div className="p-4 bg-[#161f35] rounded-lg text-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mx-auto mb-2" />
                    <span>Git</span>
                  </div>
                  <div className="p-4 bg-[#161f35] rounded-lg text-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12 mx-auto mb-2" />
                    <span>Figma</span>
                  </div>
                  <div className="p-4 bg-[#161f35] rounded-lg text-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12 mx-auto mb-2" />
                    <span>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects"
        ref={projectsRef}
        className="py-20 bg-[#0d1424]"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                Projets
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Projet Zoo */}
              <div className="bg-[#161f35] rounded-xl overflow-hidden group">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1503919005314-c3e766db4b3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Projet Zoo" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161f35] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Projet Zoo</h3>
                  <p className="text-gray-400 mb-4">
                    Site web informatif pour un zoo fictif avec présentation des espèces et informations pratiques.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">HTML</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">CSS</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">JavaScript</span>
                  </div>
                  <a 
                    href="http://zooharris.infinityfreeapp.com/index.html" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#4facfe] hover:text-[#00f2fe] transition-colors"
                  >
                    Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Projet Scolarité */}
              <div className="bg-[#161f35] rounded-xl overflow-hidden group">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Projet Scolarité" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161f35] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Projet Scolarité</h3>
                  <p className="text-gray-400 mb-4">
                    Application de gestion scolaire pour le suivi des élèves et des enseignants.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">PHP</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">MySQL</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Bootstrap</span>
                  </div>
                  <a 
                    href="http://scolariteharris.infinityfreeapp.com/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#4facfe] hover:text-[#00f2fe] transition-colors"
                  >
                    Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Projet E-commerce */}
              <div className="bg-[#161f35] rounded-xl overflow-hidden group">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Projet E-commerce" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161f35] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Projet E-commerce</h3>
                  <p className="text-gray-400 mb-4">
                    Plateforme e-commerce complète avec gestion des produits et des commandes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">MongoDB</span>
                  </div>
                  <a 
                    href="https://e-commerce.harrisproject.ovh/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#4facfe] hover:text-[#00f2fe] transition-colors"
                  >
                    Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stages Section */}
      <section 
        id="stages"
        ref={stagesRef}
        className="py-20 bg-[#0a0f1c]"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={stagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                Stages
              </span>
            </h2>
            <div className="space-y-8">
              {/* Stage Lycée Parc des Loges */}
              <div className="bg-[#161f35] rounded-xl p-6">
                <div className="flex flex-wrap gap-4 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#4facfe]/20 text-[#4facfe] text-sm rounded-full">
                        Mai - Juin 2024
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Stage au Lycée Parc des Loges</h3>
                    <p className="text-gray-400 mb-4">
                      Développement d'une application web de gestion des cours pour améliorer 
                      la communication entre enseignants et élèves. Mise en place d'une interface 
                      intuitive et sécurisée.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">PHP</span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">JavaScript</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">MySQL</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <a 
                        href="https://gest-eleves.harrisproject.ovh/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#4facfe] hover:text-[#00f2fe] transition-colors"
                      >
                        Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage Pangee ONG */}
              <div className="bg-[#161f35] rounded-xl p-6">
                <div className="flex flex-wrap gap-4 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#4facfe]/20 text-[#4facfe] text-sm rounded-full">
                        Janvier - Février 2024
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Stage chez Pangee ONG</h3>
                    <p className="text-gray-400 mb-4">
                      Contribution au développement d'une plateforme collaborative pour la gestion 
                      de projets humanitaires. Focus sur l'expérience utilisateur et l'accessibilité.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Node.js</span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">MongoDB</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <a 
                        href="#" 
                        className="inline-flex items-center text-[#4facfe] hover:text-[#00f2fe] transition-colors"
                      >
                        Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Veille Technologique */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Veille Technologique</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#161f35] rounded-xl p-6">
                  <h4 className="text-lg font-medium mb-3">Frameworks & Librairies</h4>
                  <p className="text-gray-400 text-sm">
                    Suivi des dernières évolutions React, Vue.js, et technologies front-end.
                  </p>
                </div>
                <div className="bg-[#161f35] rounded-xl p-6">
                  <h4 className="text-lg font-medium mb-3">Sécurité Web</h4>
                  <p className="text-gray-400 text-sm">
                    Actualités sur la cybersécurité et les bonnes pratiques de sécurisation.
                  </p>
                </div>
                <div className="bg-[#161f35] rounded-xl p-6">
                  <h4 className="text-lg font-medium mb-3">DevOps & Cloud</h4>
                  <p className="text-gray-400 text-sm">
                    Veille sur les outils et pratiques de déploiement continu.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="/veille-technologique"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  Accéder à ma veille technologique
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0d1424]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <p className="text-gray-400 mb-8">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/votre-github" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#161f35] rounded-full hover:bg-[#4facfe]/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/votre-linkedin" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#161f35] rounded-full hover:bg-[#4facfe]/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:votre@email.com"
                className="p-3 bg-[#161f35] rounded-full hover:bg-[#4facfe]/20 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0f1c] border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>© 2024 Harris.dev - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;