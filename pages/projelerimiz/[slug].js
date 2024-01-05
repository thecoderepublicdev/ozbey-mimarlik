import { useRouter } from 'next/router'
import Layout from '../_layout';
import Projects from '@data/Projects';
import { memo, useEffect, useState } from 'react';
import ProjectContent from '@components/projects/ProjectContent';


function ProjectSingle() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(true);
    const [currentProject, setCurrentProject] = useState();

    useEffect(() => {
        const findMe = async () => {
            if (router.query.projectID) {
                const foundProject = Projects.find(p => p.id === parseInt(router.query.projectID));
                setCurrentProject(foundProject);
            } else if (router.query.slug) {
                const foundProject = Projects.find(p => p.slug === router.query.slug);
                setCurrentProject(foundProject);
            }
    
            setLoading(false);
        };
    
        findMe();
    }, [router.query.projectID, router.query.slug]);
    


    return(
        <Layout showLoading={isLoading}>
            <ProjectContent>
                <ProjectContent.Title>{currentProject?.title}</ProjectContent.Title>
                <ProjectContent.Gallery>{["1", "2"]}</ProjectContent.Gallery>
                <ProjectContent.Specs>
                    <ProjectContent.Specs.RoomCount>1</ProjectContent.Specs.RoomCount>
                </ProjectContent.Specs>
            </ProjectContent>
        </Layout>
    )
}

export default memo(ProjectSingle)