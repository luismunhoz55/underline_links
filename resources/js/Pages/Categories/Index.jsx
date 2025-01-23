import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("categories.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Categorias" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl font-semibold leading-tight text-gray-800 dark:text-gray-200 mb-6">
                    Criar categoria
                </h2>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        value={data.name}
                        placeholder="Nome:"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mb-6"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton
                        type="submit"
                        className="mt-4"
                        disabled={processing}
                    >
                        Criar
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
