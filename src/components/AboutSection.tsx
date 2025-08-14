const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-text-primary">About </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="bg-surface-primary rounded-2xl p-8 md:p-12 shadow-soft">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I am an enthusiastic third-year Computer Science Engineering student passionate about 
              coding and problem-solving. My journey in technology has been driven by curiosity and 
              a desire to create meaningful solutions that make a difference.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Through my academic pursuits and professional experiences, I've had the opportunity 
              to work with diverse teams and cutting-edge technologies. I aim to apply my knowledge 
              to real-world projects, continuously develop my technical skills, and contribute to 
              dynamic team environments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">What I Do</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Full Stack Web Development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Database Design & Management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Problem Solving & Algorithm Design
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Interests</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Gaming & Interactive Media
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cricket & Sports Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };