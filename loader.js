const AmagiLoader = {
    __loader: null,
    show: function () {

        if (this.__loader == null) {
            var divContainer = document.createElement('div');
            divContainer.style.position = 'fixed';
            divContainer.style.left = '0';
            divContainer.style.top = '0';
            divContainer.style.justifyContent = 'center';
            divContainer.style.alignItems = 'center';
            divContainer.style.width = '100%';
            divContainer.style.height = '100%';
            divContainer.style.zIndex = '9998';
            divContainer.style.backgroundColor = 'rgba(250, 250, 250, 0.80)';

            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.zIndex = '9999';
            div.style.height = '64px';
            div.style.width = '64px';
            div.style.margin = 'auto';
            div.style.border = '8px solid #e1e1e1';
            div.style.borderRadius = '50%';
            div.style.borderTop = '8px solid #108ee9';
            div.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
              ], {
                duration: 2000,
                iterations: Infinity
              });
            divContainer.appendChild(div);
            this.__loader = divContainer
            document.body.appendChild(this.__loader);
        }
        this.__loader.style.display="flex";
    },
    hide: function(){
        if(this.__loader!=null)
        {
            this.__loader.style.display="none";
        }
    }
}