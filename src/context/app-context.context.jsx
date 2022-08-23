import { useState,useEffect } from "react";
import { createContext } from "react";
import { fetchData } from "../utils/data";

const defaultValue = {
    isModalOpen: false,
    modalContent: null,
    projects: [],
    projectsTechnologies: [],
    setIsModalOpen: () => null,
    setModalContent: () => null
}

export const AppContext = createContext(defaultValue);

const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [projects, setProjects] = useState([]);
    const [projectsTechnologies, setProjectsTechnologies] = useState([]);

    const value = {
        isModalOpen, 
        modalContent,
        projects,
        projectsTechnologies,
        setIsModalOpen, 
        setModalContent
    };

    const setProjectsData = (projects) => {
        const technologies = projects.reduce((sum, project) => {
            return [...sum, ...project.technologies.filter(technology => !sum.includes(technology))]
        }, []);
        setProjects(projects);
        setProjectsTechnologies(technologies);
        
    }

    useEffect(() => {
        fetchData('projects.json', setProjectsData);
    }, []);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider;