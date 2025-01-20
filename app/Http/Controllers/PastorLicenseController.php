<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class PastorLicenseController extends Controller
{
    public function __invoke(Request $request)
    {
        // Validate inputs
        $request->validate([
            'picture' => 'nullable|file|mimes:jpg,jpeg,png|max:10240',
            'signature' => 'nullable|file|mimes:jpg,jpeg,png|max:10240',
        ]);

        // Handle file uploads to S3
        $picturePath = $request->file('picture')?->store('images', 's3');
        $signaturePath = $request->file('signature')?->store('images', 's3');

        // Generate URLs manually if necessary
        if ($picturePath) {
            $picturePath = 'https://' . env('AWS_BUCKET') . '.s3.' . env('AWS_DEFAULT_REGION') . '.amazonaws.com/' . $picturePath;
        }
        if ($signaturePath) {
            $signaturePath = 'https://' . env('AWS_BUCKET') . '.s3.' . env('AWS_DEFAULT_REGION') . '.amazonaws.com/' . $signaturePath;
        }

        // Return file paths as response
        return response()->json([
            'picture_path' => $picturePath,
            'signature_path' => $signaturePath,
            'msg' => 'Files uploaded successfully to S3!',
        ]);
    }
}
