import React, { lazy, Suspense, useEffect, useState } from 'react';

const importView = name =>
    lazy(() =>
        import(`./${name}`).catch(() =>
            import(`./primary`)
        )
    );

export default function Index(props) {
    const [view, setViews] = useState(null);


    useEffect(() => {
        function loadViews() {
                const Button = async () => {
                    const View = await importView(props.variant);
                    return <View key={`${props.variant}${Math.random()}`} {...props} />;
                };
                Button().then((view) => setViews(view));
        }

        loadViews();
    }, []);

    return (
        <Suspense fallback='views...'>
            {view}
        </Suspense>
    );
}

