import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Index({ auth, links }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        url: "",
        title: "",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("links.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Links" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl font-semibold leading-tight text-gray-800 dark:text-gray-200 mb-6">
                    Salvar link
                </h2>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        value={data.url}
                        placeholder="URL:"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mb-6"
                        onChange={(e) => setData("url", e.target.value)}
                    />
                    <input
                        type="text"
                        value={data.title}
                        placeholder="Título:"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mb-6"
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <textarea
                        value={data.description}
                        placeholder="Descrição:"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mb-6"
                        onChange={(e) => setData("description", e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <div>
                        <PrimaryButton
                            type="submit"
                            className="mt-4 mr-3"
                            disabled={processing}
                        >
                            Salvar
                        </PrimaryButton>
                        <SecondaryButton
                            onClick={() =>
                                (window.location.href = "/dashboard")
                            }
                        >
                            Voltar
                        </SecondaryButton>
                    </div>
                </form>
                <div className="mt-6">
                    {links.map((link) => (
                        <div className="mb-3 p-3 bg-white rounded">
                            <div>{link.title}</div>
                            <div>{link.url}</div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
