import Grid from "@components/layout/Grid";
import ProjectBox from "@components/projects/ProjectBox";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function AllProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const fd = new FormData();
            fd.append('filter', 'ALL');
            console.log(fd);

            try {
                const res = await axios({
                    method: 'POST',
                    url: '/api/projects/fetch',
                    headers: { "Content-Type": "application/json" },
                    data: fd
                });
                console.log(res.data);
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
