import Title from "@components/shared/Title";
import Layout from "../_layout";
import { Tab } from "@headlessui/react";
import { Fragment, Suspense, memo } from "react";
import classNames from "classnames";
import AllProjects from "@components/projects/AllProjects";
import CompletedProjects from "@components/projects/Completed";
import NonCompletedProjects from "@components/projects/NonCompleted";

function ProjectsHome() {
    return(
        <Layout>
            <Tab.Group>
                <div className="static lg:min-h-[200px] xl:min-h-[200px] 2xl:min-h-[200px] container mx-auto max-w-screen-2xl flex-col xl:flex-row 2xl:flex-row lg:flex-row flex justify-between align-center items-center content-center">
                    <Title level="h1">Projelerimiz</Title>
                    <Tab.List className="w-fit rounded-full bg-gray-100 p-2 flex gap-4">
                        <Tab as={Fragment}>
                            {({selected}) => (
                                <button className={classNames(
                                    'px-6 py-4 rounded-full text-gray-500 outline-none transition-all ease-in-out', {
                                        'bg-black text-white': selected
                                    }
                                )}>Hepsi</button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({selected}) => (
                                <button className={classNames(
                                    'px-6 py-4 rounded-full text-gray-500 outline-none transition-all ease-in-out', {
                                        'bg-black text-white': selected
                                    }
                                )}>Tamamlananlar</button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({selected}) => (
                                <button className={classNames(
                                    'px-6 py-4 rounded-full text-gray-500 outline-none transition-all ease-in-out', {
                                        'bg-black text-white': selected
                                    }
                                )}>Devam Edenler</button>
                            )}
                        </Tab>
                    </Tab.List>
                </div>

                <div className="container mx-auto max-w-screen-2xl">
                    <Tab.Panels>
                        <Tab.Panel className="filter-container">
                            <AllProjects/>
                        </Tab.Panel>
                        <Tab.Panel className="filter-container">
                            <CompletedProjects/>
                        </Tab.Panel>
                        <Tab.Panel className="filter-container">
                            <NonCompletedProjects/>
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </Layout>
    )
}

export default memo(ProjectsHome)