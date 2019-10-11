<?php

namespace App\Http\Controllers\BookPdf;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use setasign\Fpdi\Fpdi;

class BookController extends Controller
{
    function printContent(&$pdf, $fonts, $size, $x, $y, $w, $content,$width =false,$skipFirstEmpty = false,$Ywidth = false) {
        
        $pdf->AddFont($fonts[0],'',$fonts[0].'.php'); // Regular
        $pdf->AddFont($fonts[1],'',$fonts[1].'.php'); // Bold
        $pdf->SetFont($fonts[0],'', $size); // default is Regular
        $content = $this->formatContent($content);

        $paragraphs = explode("\n", $content);
        if ($skipFirstEmpty && $paragraphs[0] == '') array_shift($paragraphs);
        foreach ($paragraphs as $content) {
            $pdf->SetXY($x, $y);
            $this->printCell($pdf, $fonts, $size, $x, $y, $w, $content,$width,$Ywidth);
            if($Ywidth == false){
            $y = $pdf->GetY() + 2.5;
            }else{
                $y = $pdf->GetY() + $Ywidth;
            }
        }
    }
    function printCell(&$pdf, $fonts, $size, $x, $y, $w, $content,$width=false) {
        $pos = strpos($content, '<strong>');
        if ($pos !== false) {
            if ($pos > 0) {
                $pdf->MultiCell($w, 5, substr($content, 0, $pos)); //, 0, 'J', false, 0
            }
            $content = substr($content, $pos + strlen('<strong>'));
            $pos = strpos($content, '</strong>');
            if ($pos !== false) {
                $pdf->SetFont($fonts[1], '', $size); // Bold
                $pdf->MultiCell($w, 5, substr($content, 0, $pos));//, 0, 'J', false, 0);
                $pdf->SetFont($fonts[0], '', $size); //back to Regular
                $content = substr($content, $pos + strlen('</strong>'));
                if ($content) {
                    $this->printCell($pdf, $fonts, $size, $pdf->GetX(), $y, $w, $content,$width);
                }
            } else {
                $pdf->MultiCell($w, 5, $content);
            }
        } else {
            if($width == false){
            $pdf->MultiCell($w, 5, $content, 0 , 'L');
            }else{
                $pdf->MultiCell($w, $width, $content, 0 , 'L');
            }

        }
    }

    function formatContent($content) {
        $content = str_replace('&nbsp;', '', $content);
        $content = str_replace('&amp;', '&', $content);
        $content = str_replace('<p>', '', $content);
        $content = str_replace('</p>', "\n", $content);
        $content = iconv('UTF-8', 'ASCII//TRANSLIT', $content);
        return strip_tags($content, '<strong>');
    }

    /**
     * Get Publication Version Name.
     *
     * @param bookId, Authid
     * @return \Illuminate\Http\Response
     */
    function getBookName($bookId, $authId, $coverName = '') {
        $book = Books::where('id', $bookId)->first();
        $userData = User::where('id', $authId)->first();
        $bookPVN = GeneralSettings::first();
        $name = '';
        if ($book) {
            $pcn = $bookPVN ? $bookPVN->publication_version_name : '';
            $name = $book->short_name . $pcn . '_' . $userData->print_marketing_version;
            if ($coverName) {
                $name = $name . '_' . $coverName;
            }
        }
        return $name;

    }
    public function imageCenterCell1(&$pdf,$file, $x, $y, $w, $h)
    {
        if (!file_exists($file)) 
        {
            $pdf->Error('File does not exist: '.$file);
        }
        else
        {
            list($width, $height) = getimagesize($file);
            $ratio=$width/$height;
            $zoneRatio=$w/$h;
            // Same Ratio, put the image in the cell
            if ($ratio==$zoneRatio)
            {
                $pdf->Image($file, $x, $y, $w, $h,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
            // Image is vertical and cell is horizontal
            if ($ratio<$zoneRatio)
            {
                $neww=$h*$ratio; 
                $newx=$x;
                $pdf->Image($file, $newx, $y, $neww,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
            // Image is horizontal and cell is vertical
            if ($ratio>$zoneRatio)
            {
                $newh=$w/$ratio;
                if($newh < 10){
                    $newy=$y+(($h-$newh)-20);
                }else{
                $newy=$y+(($h-$newh)-12);
                }
                // dd($newh,$newy);
                $pdf->Image($file, $x, $newy, $w,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
        }
    }

    public function RotateImage(&$pdf,$file, $x, $y, $w, $h,$angle)
    {
        if (!file_exists($file)) 
        {
            $pdf->Error('File does not exist: '.$file);
        }
        else
        {
            list($width, $height) = getimagesize($file);
            $ratio=$width/$height;
            $zoneRatio=$w/$h;
            // Same Ratio, put the image in the cell
            if ($ratio==$zoneRatio)
            {
                $pdf->Rotate($angle,$x,$y);
                $pdf->Image($file, $x, $y, $w, $h,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
                $pdf->Rotate(0);
            }
            // Image is vertical and cell is horizontal
            if ($ratio<$zoneRatio)
            {
                
                $neww=$h*$ratio; 
                $newx=$x;
                $pdf->Rotate($angle,$x,$y);
                $pdf->Image($file, $newx, $y, $neww,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
                $pdf->Rotate(0);
            }
            // Image is horizontal and cell is vertical
            if ($ratio>$zoneRatio)
            {
                $newh=$w/$ratio; 
                $newy=$y;
                $pdf->Rotate($angle,$x,$y);
                $pdf->Image($file, $x, $newy, $w,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
                $pdf->Rotate(0);
            }
        }
    }
    public function signatureImage(&$pdf,$file, $x, $y, $w, $h)
    {
        if (!file_exists($file)) 
        {
            $pdf->Error('File does not exist: '.$file);
        }
        else
        {
            list($width, $height) = getimagesize($file);
            $ratio=$width/$height;
            $zoneRatio=$w/$h;
            // Same Ratio, put the image in the cell
            if ($ratio==$zoneRatio)
            {
                $pdf->Image($file, $x, $y, $w, $h,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
            // Image is vertical and cell is horizontal
            if ($ratio<$zoneRatio)
            {
                $neww=$h*$ratio; 
                $newx=$x;
                $pdf->Image($file, $newx, $y, $neww,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
            // Image is horizontal and cell is vertical
            if ($ratio>$zoneRatio)
            {
                $newh=$w/$ratio; 
                $newy=$y+(($h-$newh)/2);
                $pdf->Image($file, $x, $newy, $w,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
        }
    }

    function CstNumber(&$pdf,$font,$text,$fontSize1,$fontSize2,$x,$y){
        $pdf->AddFont($font,'',$font.'.php');
        $pdf->SetFont($font,'', $fontSize1);

        $st = $pdf->Text($x,$y,'ST# ');
        $textWidth = $pdf->GetStringWidth('ST# ');
        $pdf->AddFont($font,'',$font.'.php');
        $pdf->SetFont($font,'', $fontSize2);
        $mid_x = 100;
        $pdf->Text($x + $textWidth ,$y,$text);

    }
    public function imageCenterCell(&$pdf,$file, $x, $y, $w, $h)
    {
        // dd($y);
        if (!file_exists($file)) 
        {
            $pdf->Error('File does not exist: '.$file);
        }
        else
       {
            list($width, $height) = getimagesize($file);
            $ratio=$width/$height;
            $zoneRatio=$w/$h;
            // Same Ratio, put the image in the cell
            if ($ratio==$zoneRatio)
            {
                $pdf->Image($file, $x, $y, $w, $h,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
            // Image is vertical and cell is horizontal
            if ($ratio<$zoneRatio)
            {
                $neww=$h*$ratio; 
                $newx=$x+(($w-$neww)/2);
                $pdf->Image($file, $newx, $y, $neww,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
            // Image is horizontal and cell is vertical
            if ($ratio>$zoneRatio)
            {
                $newh=$w/$ratio; 
                $newy=$y+(($h-$newh)/2);
                
                $pdf->Image($file, $x, $newy, $w,'', '', ''/*$align*/, false/*$resize*/, 300/*$dpi*/, ''/*$pAlign*/, false/*$isMask*/, false/*$imgMask*/, 0/*$border*/, false/*$fitBox*/);
            }
        }
    }
}
