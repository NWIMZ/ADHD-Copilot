(function(){
    window.addEventListener("load",function(){
        // document.querySelector(".note_content_pdf[title='Download PDF']").download = "true";
        
        // detect the modal exist
        let bibTexModal = document.querySelector("#bibtex-modal");
        if(bibTexModal){
            let downloadBibButton = document.createElement("button");
            downloadBibButton.innerHTML = "Download BibTeX";
            downloadBibButton.className = "btn btn-default";
            // create bibTeX file
            downloadBibButton.onclick = function(){
                let bib = document.querySelector("#bibtex-modal pre.bibtex-content").innerText;
                let blob = new Blob([bib], {type: "text/plain;charset=utf-8"});
                saveAs(blob, document.querySelector(".note_content_title span").innerText + ".bib");
            }
            bibTexModal.querySelector(".modal-footer").appendChild(downloadBibButton);
        }
    })
})()