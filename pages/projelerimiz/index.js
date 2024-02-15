import Title from "@components/shared/Title";
import Layout from "../_layout";
import { Tab } from "@headlessui/react";
import { Fragment, memo } from "react";
import classNames from "classnames";
import AllProjects from "@components/projects/AllProjects";
import CompletedProjects from "@components/projects/Completed";
import NonCompletedProjects from "@components/projects/NonCompleted";

function ProjectsHome() {
    return(
        <Layout>
            <Tab.Group>
                <div className="p-4 static w-full lg:min-h-[200px] xl:min-h-[200px] 2xl:min-h-[200px] container mx-auto max-w-screen-2xl flex-col xl:flex-row 2xl:flex-row lg:flex-row flex justify-between xl:align-center lg:align-center 2xl:align-center xl:items-center 2xl:items-center lg:items-center xl:content-center 2xl:content-center lg:content-center gap-4">
                    <Title level="h1">Projelerimiz</Title>
                    <Tab.List className="w-fit rounded-full border-2 border-gray-100 p-2 flex gap-4">
                        <Tab as={Fragment}>
                            {({selected}) => (
                                <button className={classNames(
                                    'text-sm uppercase px-6 py-4 rounded-full text-gray-500 outline-none transition-all ease-in-out', {
                                        'bg-gradient-to-t from-brand-primary to-brand-secondary text-white': selected
                                    }
                                )}>Hepsi</button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({selected}) => (
                                <button className={classNames(
                                    'text-sm uppercase px-6 py-4 rounded-full text-gray-500 outline-none transition-all ease-in-out', {
                                        'bg-gradient-to-t from-brand-primary to-brand-secondary text-white': selected
                                    }
                                )}>Tamamlananlar</button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({selected}) => (
                                <button className={classNames(
                                    'text-sm uppercase px-6 py-4 rounded-full text-gray-500 outline-none transition-all ease-in-out', {
                                        'bg-gradient-to-t from-brand-primary to-brand-secondary text-white': selected
                                    }
                                )}>Devam Edenler</button>
                            )}
                        </Tab>
                    </Tab.List>
                </div>

                <div className="container mx-auto max-w-screen-2xl">
                    <Tab.Panels>
                        <Tab.Panel className="p-4 filter-container">
                            <AllProjects/>
                        </Tab.Panel>
                        <Tab.Panel className="p-4 filter-container">
                            <CompletedProjects/>
                        </Tab.Panel>
                        <Tab.Panel className="p-4 filter-container">
                            <NonCompletedProjects/>
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </Layout>
    )
}

export default memo(ProjectsHome)