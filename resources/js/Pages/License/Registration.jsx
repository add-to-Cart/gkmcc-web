import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";


export default function Registration() {
    const [picture, setPicture] = useState(null);
    const [signature, setSignature] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileChange = (event, setFile) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        if (picture) formData.append("picture", picture);
        if (signature) formData.append("signature", signature);

        try {
            const response = await axios.post(route("upload-registration"), formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert(response.data.msg);
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClear = () => {
        setPicture(null);
        setSignature(null);
        document.getElementById("picture").value = "";
        document.getElementById("signature").value = "";
    };

    return (
        <GuestLayout>
            <Head title="Pastor's ID" />
            <div className="max-w-4xl mx-auto mt-10 space-y-8">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    Pastor's License Registration
                </h1>
                <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-8 space-y-6">
                    <div>
                        <label htmlFor="picture" className="block text-sm font-medium text-gray-700">
                            Upload Picture (JPG, PNG, JPEG - Max 10 MB)
                        </label>
                        <input
                            type="file"
                            id="picture"
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, setPicture)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
                            Upload Signature (JPG, PNG, JPEG - Max 10 MB)
                        </label>
                        <input
                            type="file"
                            id="signature"
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, setSignature)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                    </div>
                    <div className="flex justify-between space-x-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-indigo-700"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                        <button
                            type="button"
                            onClick={handleClear}
                            className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg shadow-md hover:bg-gray-300"
                        >
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
