import { ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "VKellogg's Website",
        description: "Creating a clean and minimalist website with a home, product, recipe, about, and contact page",
        img: "project/project_1.jpg",
        tags: ["HTML", "CSS", "JavaScript", "Figma"],
        githubURL: "https://github.com/J0S3PH-B/VKellogg-s-Front-End-Project",
    },
    {
        id: 2,
        title: "BeeHealty Application",
        description: "Building an interactive mobile app for sleep tracking and schedule organizer complete with backend",
        img: "project/project_2.jpg",
        tags: ["Figma", "Flutter", "Dart"],
        githubURL: "https://github.com/GeoffreyJulianto/BeeHealthy",
    },
    {
        id: 3,
        title: "Titanic Dataset Analysis",
        description: "Exploring and preprocessing of the Titanic dataset to extract important insights and patterns from the dataset",
        img: "project/project_3.png",
        tags: ["Python", "Seaborn", "Mathplotlib"],
        githubURL: "https://colab.research.google.com/drive/1X7gMKLkUQUDfowY5zl_-PP72pmpxCN-K#scrollTo=fKlyxuddgyzI",
    },
];

export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center"> 
                 Featured  <span className="text-primary"> Projects </span> 
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((project, key) => (

                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hiver:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primrary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                    href={project.githubURL}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    </section>
}