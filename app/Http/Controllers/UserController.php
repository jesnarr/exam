<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use PHPUnit\Framework\Constraint\FileExists;

class UserController extends Controller
{

    public function createUser(Request $request)
    {
        try {

            $path = public_path('/images/');
            if ($request->img) {
                $file = $request->file('img');
                $image = time() . '.' . $file->getClientOriginalExtension();
                $file->move($path, $image);
            }

            User::create([
                'first_name' => strtoupper($request->first_name),
                'middle_name' => $request->middle_name ? strtoupper($request->middle_name) : null,
                'last_name' => strtoupper($request->last_name),
                'about' => $request->bio,
                'email' => $request->email,
                'password' => password_hash($request->password, PASSWORD_BCRYPT),
                'img' => $request->img ? $image : ''
            ]);
            return response()->json(['message' => 'Successfully added', 'status' => 200]);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage(),  'status' => 422]);
        }
    }


    public function updateUser(Request $request)
    {
        try {
            $user = User::find($request->id);
            $user->last_name = strtoupper($request->last_name);
            $user->middle_name =  $request->middle_name ? strtoupper($request->middle_name) : null;
            $user->first_name = strtoupper($request->first_name);
            $user->about = $request->bio;

            $path = public_path('/images/');
            if ($request->img) {
                if (File::exists($path . '' . $user->img)) File::delete($path . '' . $user->img);

                $file = $request->file('img');
                $image = time() . '.' . $file->getClientOriginalExtension();
                $file->move($path, $image);

                $user->img = $image;
            }

            if ($request->password) {
                $user->password = password_hash($request->password, PASSWORD_BCRYPT);
            }

            $user->save();

            return response()->json(['message' => 'Successfully updated', 'status' => 200]);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'status' => 422]);
        }
    }

    public function getAllUsers()
    {
        return response()->json(['data' => User::all(), 'status' => 200]);
    }

    public function getUserById($id)
    {
        return response()->json(['data' => User::find($id), 'status' => 200]);
    }

    public function delete($id)
    {
        try {
            $user = User::find($id);
            $image_path = public_path('/images/' . $user->img);
            if (File::exists($image_path)) File::delete($image_path);

            $user->delete();
            return response()->json(['message' => 'Successfully deleted', 'status' => 200]);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'status' => 400]);
        }
    }
}
