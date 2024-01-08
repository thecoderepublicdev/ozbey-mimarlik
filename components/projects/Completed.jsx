import { useEffect, useMemo, useState } from "react";
import Grid from "@components/layout/Grid";
import ProjectBox from "@components/projects/ProjectBox";
import axios from 'axios';

export default function CompletedProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const fd = new FormData();
            fd.append('filter', 'COMPLETED');

            try {
                const res = await axios({
                    method: 'POST',
                    url: '/api/projects/fetch',
                    headers: { "Content-Type": "application/json" },
                    data: fd
                });
                setProjects(res.data.projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        }

        fetchProjects();
    }, []);

    const memoizedProjects = useMemo(() => projects, [projects]);

    return (
        <Grid desktop={3} mobile={1} gap={4}>
            {memoizedProjects.map((project, key) => (
                <ProjectBox id={project.id} key={key}>
                    <ProjectBox.Thumbnail>{project.thumbnail}</ProjectBox.Thumbnail>
                    <ProjectBox.Name>{project.title}</ProjectBox.Name>
                    <ProjectBox.Status>{project.status}</ProjectBox.Status>
                </ProjectBox>
            ))}
        </Grid>
    );
}