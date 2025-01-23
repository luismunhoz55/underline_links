import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Dashboard
                    </h2>
                    <PrimaryButton
                        onClick={() => (window.location.href = "/links")}
                    >
                        Salvar link
                    </PrimaryButton>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 text-white">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div>
                        <h2 className="text-xl mb-4">Categorias</h2>

                        <div className="flex items-center gap-6">
                            <div className="w-fit rounded-lg px-6 py-3 bg-white dark:text-gray-900 text-gray-100 mb-6 inline-block">
                                Reddit
                            </div>

                            <div className="w-fit rounded-lg px-6 py-3 bg-white dark:text-gray-900 text-gray-100 mb-6">
                                Telegram
                            </div>

                            <div className="w-fit rounded-lg px-6 py-3 bg-white dark:text-gray-900 text-gray-100 mb-6">
                                Youtube
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl mb-4">Links Recentes</h2>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-5">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Telegram groups
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-5">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            how to draw
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-5">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Proko
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3">
                <div className="bg-white"></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </AuthenticatedLayout>
    );
}
