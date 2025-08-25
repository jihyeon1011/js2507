//차 컴포넌트 구성부
function Car(props) {
    return (
        <>
            <h2>안녕.. 마이 빵빵이 색상은{props.color}</h2>
            <p>---{props.name}---오늘도 안전운전~~!!</p>
        </>
    )
}

export default Car