import { useMemo } from 'react';
import Grid from "@components/layout/Grid";
import ProjectBox from "@components/projects/ProjectBox";
import Projects from "@data/Projects";

export default function CompletedProjects() {
    const completedProjects = useMemo(() => {
        return Projects.filter(project => project.status === 'COMPLETED');
    }, [Projects]);

    return (
        <Grid desktop={3} mobile={1} gap={4}>
            {completedProjects.map((project, key) => (
                <ProjectBox id={project.id} key={key}>
                    <ProjectBox.Thumbnail>{project.thumbnail}</ProjectBox.Thumbnail>
                    <ProjectBox.Name>{project.title}</ProjectBox.Name>
                    <ProjectBox.Status>{project.status}</ProjectBox.Status>
                </ProjectBox>
            ))}
        </Grid>
    );
}