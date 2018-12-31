$a = "cap-shape
>>       - cap-surface
>>       - cap-color
>>       - bruises
>>       - odor
>>       - gill-attachment
>>       - gill-spacing
>>       - gill-size
>>       - gill-color
>>       - stalk-shape
>>       - stalk-root
>>       - stalk-surface-above-ring
>>       - stalk-surface-below-ring
>>       - stalk-color-above-ring
>>       - stalk-color-below-ring
>>       - veil-type
>>       - veil-color
       - ring-number>>       - ring-type>>       - spore-print-color>>       - population>>       - habitat"


       $a =  $a | % { ($_ -replace "- ").Trim()}
       $props = $a -split "`n" | % { $_ -replace "^\W+" }
       $data = "x,y,g,f,f,f,c,b,p,e,b,k,k,n,p,p,w,o,l,h,v,d" -split ","