<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>One</title>
    <link href="{{asset('/css/style.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('/css/themify-icons.css')}}"href="">
    <link rel="stylesheet" href="{{asset('css/icofont.min.css')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    
</head>
<body>
    <div id="app">
            <router-view></router-view>
    </div>
<script src="{{asset('js/app.js')}}"></script>
<link href="{{asset('/css/responsive.css')}}" rel="stylesheet">
</body>
</html>